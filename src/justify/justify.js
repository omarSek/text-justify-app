const joinALineWithSpace = function(words, start, end, numSpaces) {
    let numWordsCurrLine = end - start + 1
    let line = ''
     
    for (let i = start; i < end ; i++) {
        line += words[i]
        --numWordsCurrLine
        let numCurrSpace = Math.ceil(numSpaces/numWordsCurrLine)
        // console.log(numSpaces + ' ' + numWordsCurrLine)
        line += ' '.repeat(numCurrSpace)
        numSpaces -= numCurrSpace

    }
    
    
    line += words[end]
    line += ' '.repeat(numSpaces)
    
    return line
}


const justifyText = function (words, lineLength = 80) {
    
    let currLineStart = 0 
    let numWordsCurrLine = 0 
    let currLineLength = 0 

    let result = []
    for (let i = 0 ; i < words.length ; i++){
        numWordsCurrLine ++
        // le 3eme operand pour ajouter le nombre d'éspace
        let lookadeadLineLength = currLineLength + words[i].length + (numWordsCurrLine - 1)
        
        if (lookadeadLineLength === lineLength ) {
            // le 3eme operand c'est aussi le nombre d'espace 
            let ans = joinALineWithSpace(words, currLineStart, i, i - currLineStart )
            result.push(ans)

            currLineStart = i + 1
            numWordsCurrLine = 0
            currLineLength = 0 

        } else if (lookadeadLineLength > lineLength){
            
            let ans = joinALineWithSpace(
                            words,
                            currLineStart, 
                            i - 1, 
                            lineLength - currLineLength)
            result.push(ans)

            currLineStart = i
            numWordsCurrLine = 1
            currLineLength = words[i].length
        } 
        
        else {
            currLineLength += words[i].length
        }
    }

    if (numWordsCurrLine > 0 ) {

        let lastLine = joinALineWithSpace(
            words,
            currLineStart,
            words.length - 1,
            numWordsCurrLine - 1  
        )
        
        //lastLine += ' '.repeat(lineLength - currLineLength - (numWordsCurrLine - 1))
        
        
        result.push(lastLine)


    }

    return result
}

// const printJustifiedText = function (result) {
//     result.forEach(element => {
//         console.log(element, '\n')
//     });
// }

// const printJustifiedText = function (result) {
//     let resultFinal = ''
//     result.forEach(element => {
//         resultFinal += element + '\n'
        
//     });
//     return resultFinal
// }

const printJustifiedText = function (result) {
    let resultFinal = ''
    let i = 0
    
    for ( i = 0 ; i < result.length -1; i++){
        resultFinal += result[i] +'\n'
    }
    resultFinal += result[result.length -1 ]
    return resultFinal
}


module.exports = {
    justifyText,
    printJustifiedText
}
const jusitfyTheText = function(str, L) {

    let words = []
    let result = []
    words = str.split(' ')
    
    result = justifyText(words,L)
    printJustifiedText(result)

}
const str = `Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire: «Je m’endors.» Et,une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait; je voulais poser le volume que je croyais avoir dans les mains et souffler ma lumière; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier; il me semblait que j’étais moi-même ce dont parlait l’ouvrage: une église, un quatuor, la rivalité de François Ier et de Charles-Quint. Cette croyance survivait pendant quelques secondes à mon réveil; elle ne choquait pas ma raison, mais pesait comme des écailles sur mes yeux et les empêchait de se rendre compte que le bougeoir n’était plus allumé. Puis elle commençait à me devenir inintelligible, comme après la métempsycose les pensées d’une existence antérieure; le sujet du livre se détachait de moi, j’étais libre de m’y appliquer ou non; aussitôt je recouvrais la vue et j’étais bien étonné de trouver autour de moi une obscurité, douce et reposante pour mes yeux, mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme une chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait être; j’entendais le sifflement des trains qui, plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant les distances, me décrivait l’étendue de la campagne déserte où le voyageur se hâte vers la station prochaine; et le petit chemin qu’il suit va être gravé dans son souvenir par l’excitation qu’il doit à des lieux nouveaux, à des actes inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le suivent encore dans le silence de la nuit, à la douceur prochaine du retour.`
const l = 80
jusitfyTheText(str,l)

// let para ='jesios'
// console.log('para'.padEnd(6,'tik'))

// const testendPAD = function () {
//     let  words =  ['I','am', 'Omar', 'ouaissi' ]
//     let para =''
    
    
//     words.forEach((element) =>{
//         para +=  element
//         para += ' '.repeat(5)

//     } )
//     console.log(para)
// }
// testendPAD()