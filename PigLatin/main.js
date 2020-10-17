'use strict';

const assert = require('assert');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (word) => {
  word = word.toLowerCase()
  word = word.trim()
  let splitUp = word.split('');

  var vowels = ["a", "e", "i", "o", "u"]

    var currentLetter = splitUp[i]

    if (vowels.includes(currentLetter)) {
      let tempV = [i]
      if (i <= 0) {

        splitUp.push('yay')
        let newString2 = splitUp.toString()
        for (let w = 0; w <= splitUp.length; w++) {
          newString2 = newString2.replace(',', '')
        }

return newString2      

      } else {
        for (let n = 0; n <= tempV - 1; n++) {
          splitUp.push(splitUp[0])
          splitUp.splice(0, 1)
        }

        splitUp.push('ay')
        let newString = splitUp.toString()

        for (let j = 0; j <= splitUp.length; j++) {
          newString = newString.replace(',', '')

        }

        console.log(newString)
        return newString

      }

    }


  }

}


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
