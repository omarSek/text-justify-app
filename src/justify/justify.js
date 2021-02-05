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
            console.log('ici 2')
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
        
        lastLine += ' '.repeat(lineLength - currLineLength - (numWordsCurrLine - 1))
        
        
        result.push(lastLine)


    }

    return result
}

// const printJustifiedText = function (result) {
//     result.forEach(element => {
//         console.log(element, '\n')
//     });
// }

const printJustifiedText = function (result) {
    let resultFinal = ''
    result.forEach(element => {
        resultFinal += element + '\n'
    });
    return resultFinal
}

module.exports = {
    justifyText,
    printJustifiedText
}
// const jusitfyTheText = function(str, L) {

//     let words = []
//     let result = []
//     words = str.split(' ')
    
//     result = justifyText(words,L)
//     printJustifiedText(result)

// }
// const str = "GeeksforGeek is the best comper science portal for geeks. and it make me  better so if you think that i am havnig that "
// const l = 80
// jusitfyTheText(str,l)

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