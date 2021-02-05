const moment = require ('moment')

var start = moment().utc().startOf('day');
var end = moment().utc().endOf('day');
console.log(start)
console.log(end)
