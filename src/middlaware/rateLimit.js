
const Text = require('../models/text')
const { DateTime } = require('luxon');
const maxLimitCharPerDay = 80000
const rateLimit = async (req, res, next) => {

    try {
        const start = DateTime.local().startOf('day').toSeconds();
        const end = DateTime.local().endOf('day').toSeconds();

        const totalTextLength = await Text.aggregate([
            {
                $match: {
                    owner: req.user._id,
                    createdAt: {
                        $gte: start,
                        $lte: end
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalLength: {
                        $sum: { $strLenCP: "$text" }
                        ///$sum: "$longeurText"
                    }
                }
            }
        ]).exec()
        
        if (totalTextLength.length && totalTextLength[0].totalLength > maxLimitCharPerDay) {
            return res.status(402).send({ error: 'Payment required' });
        }
        next()
    } catch (e) {
        res.status(400).send(e)
    }
}

module.exports = rateLimit