const joinALineWithSpace = function(words, start, end, num_spaces) {
    let num_words_curr_line = end - start + 1
    let line = ''
     
    for (let i = start; i < end ; i++) {
        line += words[i]
        --num_words_curr_line
        let num_curr_space = Math.ceil(num_spaces/num_words_curr_line)
        // console.log(num_spaces + ' ' + num_words_curr_line)
        line += ' '.repeat(num_curr_space)
        num_spaces -= num_curr_space

    }
    
    
    line += words[end]
    line += ' '.repeat(num_spaces)
    
    return line
}


const justifyText = function (words, lineLength = 80) {
    
    let curr_line_start = 0 
    let num_words_curr_line = 0 
    let curr_line_length = 0 

    let result = []
    for (let i = 0 ; i < words.length ; i++){
        num_words_curr_line ++
        // le 3eme operand pour ajouter le nombre d'éspace
        let lookahead_line_length = curr_line_length + words[i].length + (num_words_curr_line - 1)
        
        if (lookahead_line_length === lineLength ) {
            // le 3eme operand c'est aussi le nombre d'espace 
            let ans = joinALineWithSpace(words, curr_line_start, i, i - curr_line_start )
            result.push(ans)

            curr_line_start = i + 1
            num_words_curr_line = 0
            curr_line_length = 0 

        } else if (lookahead_line_length > lineLength){
            console.log('ici 2')
            let ans = joinALineWithSpace(
                            words,
                            curr_line_start, 
                            i - 1, 
                            lineLength - curr_line_length)
            result.push(ans)

            curr_line_start = i
            num_words_curr_line = 1
            curr_line_length = words[i].length
        } 
        
        else {
            curr_line_length += words[i].length
        }
    }

    if (num_words_curr_line > 0 ) {

        let lastLine = joinALineWithSpace(
            words,
            curr_line_start,
            words.length - 1,
            num_words_curr_line - 1  
        )
        
        lastLine += ' '.repeat(lineLength - curr_line_length - (num_words_curr_line - 1))
        
        
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