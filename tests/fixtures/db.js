const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Text = require('../../src/models/text')


const userOneId = new mongoose.Types.ObjectId()

const userOne = {
    _id: userOneId,
    name: 'Mike',
    email: 'fo_ouaissi_sekouti@esi.dz',
    password: '5Gwhal!!',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Mike',
    email: 'omar.ouaissi.sekouti@esi.dz',
    password: 'meTwofarthan!',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
}

const textSecond = "Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte,\nmes  yeux  se  fermaient  si  vite  que  je n’avais pas le temps de me dire: «Je\nm’endors.»  Et,une  demi-heure après, la pensée qu’il était temps de chercher le\nsommeil  m’éveillait;  je  voulais poser le volume que je croyais avoir dans les\nmains  et  souffler  ma  lumière;  je  n’avais pas cessé en dormant de faire des\nréflexions  sur  ce  que  je venais de lire, mais ces réflexions avaient pris un\ntour  un  peu  particulier;  il me semblait que j’étais moi-même ce dont parlait\nl’ouvrage:   une  église,  un  quatuor,  la  rivalité  de  François  Ier  et  de\nCharles-Quint.  Cette croyance survivait pendant quelques secondes à mon réveil;\nelle  ne  choquait pas ma raison, mais pesait comme des écailles sur mes yeux et\nles empêchait de se rendre compte que le bougeoir n’était plus allumé. Puis elle\ncommençait  à me devenir inintelligible, comme après la métempsycose les pensées\nd’une existence antérieure; le sujet du livre se détachait de moi, j’étais libre\nde m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais bien étonné de\ntrouver  autour  de  moi  une  obscurité, douce et reposante pour mes yeux, mais\npeut-être  plus  encore pour mon esprit, à qui elle apparaissait comme une chose\nsans  cause, incompréhensible, comme une chose vraiment obscure. Je me demandais\nquelle  heure il pouvait être; j’entendais le sifflement des trains qui, plus ou\nmoins  éloigné,  comme  le  chant  d’un  oiseau  dans  une  forêt,  relevant les\ndistances,  me décrivait l’étendue de la campagne déserte où le voyageur se hâte\nvers  la station prochaine; et le petit chemin qu’il suit va être gravé dans son\nsouvenir  par  l’excitation  qu’il  doit  à  des  lieux  nouveaux,  à  des actes\ninaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le\nsuivent encore dans le silence de la nuit, à la douceur prochaine du retour."
const setupDatabase = async () => {
    await User.deleteMany()
    await Text.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
 
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    textSecond,
    setupDatabase
}