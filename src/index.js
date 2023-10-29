const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

   const length = 10
   const length_expr = expr.split('').length
   final = ""
   for(var i = 0 ;i<length_expr/length;i++){
    var word = expr.slice(i*length,(i+1)*length)
    if (word==='**********'){
        final= final + " "
    }else{
        var key = ""
        var test = ""
        for(var t =  0; t<length/2;t++){
            var two = word.slice(t*2,(t+1)*2)
            // process.stdout.write("  " +two)

            if(two!=="00"){
                if(two === "10"){
                    key = key + '.'
                }else{
                    key = key + '-'
                }
            }

        }
        process.stdout.write("  " +key)
        final = final + MORSE_TABLE[key]
    }

   }
   return final
}

module.exports = {
    decode
}