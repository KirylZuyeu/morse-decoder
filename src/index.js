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
//split the string by pices 10 length
    let array = expr.match(/.{1,10}/g);
//again split the each pices of string by pices 2 length
    let par = array.map(num => num.match(/.{1,2}/g));
//changing numbers on symbles
    let arrD = par.map( function(item) {
       return item.map(function(pices){
            switch (pices) {
                case '00':
                  return pices = ' ';
                  break;
                case '10':
                    return pices = '.';
                  break;
                case '11':
                    return  pices = '-';
                    break;
                default:
                    return  pices = ' ';
              };
        }).join('').trim();
});
//find each value of MORSE_TABLE of keys and join by finish recap
let word = '';
for (let j = 0; j < arrD.length; j++){
    if (arrD[j] == '') {
       word += ' ';
    } else word += MORSE_TABLE[arrD[j]];
}
return word;
}

module.exports = {
    decode
}