var fs = require('fs');

//============================================================
//Basic FlashCard
var basicflashcardexp = require('./basicflashcard.js');
var clozeflashcardexp = require('./clozeflashcard.js');

var firstPresCard = new basicflashcardexp.BasicFlashcard("Who was the first president of the United States?", "George Washington");
basicflashcardexp.BasicFlashcard.prototype.saveFlashcard = function() {
    fs.appendFile('savedflashcards.txt', JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        }
    });
};
firstPresCard.displayFront();
firstPresCard.displayBack();
firstPresCard.saveFlashcard();

//============================================================
//Cloze FlashCard
var dragonflyCard = new clozeflashcardexp.ClozeFlashcard("Dragonflies can fly up to 50 miles per hour.", "Dragonflies");
clozeflashcardexp.ClozeFlashcard.prototype.saveFlashcard = function() {
    fs.appendFile('savedflashcards.txt', JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        }
    });
};


dragonflyCard.showFulltext();
dragonflyCard.showPartialTextOnly();
dragonflyCard.showClozeDeletedText();
dragonflyCard.saveFlashcard();
