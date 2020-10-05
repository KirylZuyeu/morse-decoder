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
  let letterInBinary = expr.match(/.{1,10}/g);
  //again split the each pices of string by pices 2 length
  let keyOfEveryLetter = letterInBinary.map(el => el.match(/.{1,2}/g));
  //changing numbers on symbles
  let arrOfKeysOfLetters = keyOfEveryLetter.map( function(item) {
    return item.map(function(pices){
      switch (pices) {
        case '00':
          return pices = ' ';
        case '10':
          return pices = '.';
        case '11':
          return pices = '-';
        default:
          return pices = ' ';
      };
    }).join('').trim();
  });
  //find each value of MORSE_TABLE of keys and join by finish recap
  let finishPhrase = '';
  for (let j = 0; j < arrOfKeysOfLetters.length; j++){
    if (arrOfKeysOfLetters[j] == '') {
      finishPhrase = `${finishPhrase}${' '}`;
    } else {
      finishPhrase = `${finishPhrase}${MORSE_TABLE[arrOfKeysOfLetters[j]]}`;
    }
  }
  return finishPhrase;
}

module.exports = {
    decode
}