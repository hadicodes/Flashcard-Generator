var fs = require('fs');

//============================================================
//Basic FlashCard
var basicflashcardexp = require('./basicflashcard.js');
var clozeflashcardexp = require('./clozeflashcard.js');

var basicFlashCard = new basicflashcardexp.BasicFlashcard("Who was the first president of the United States?", "George Washington");

basicFlashCard.displayFront();
basicFlashCard.displayBack();

//============================================================
//Cloze FlashCard
var clozeFlashCard = new clozeflashcardexp.ClozeFlashcard("Dragonflies can fly up to 50 miles per hour.", "Dragonflies");


// fs.appendFile('savedflashcards.txt', this.showFulltext, function(err) {
//     if (err) {
//         // append failed
//     } else {
//         // done
//     }
// });

clozeFlashCard.showFulltext();
clozeFlashCard.showPartialTextOnly();
clozeFlashCard.showClozeDeletedText();
