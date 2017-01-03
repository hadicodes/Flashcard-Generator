//filesystem require
var fs = require('fs');

//============================================================
//Basic FlashCard & cloze flashcard "requires" to link files to index.js
var basicflashcardexp = require('./basicflashcard.js');
var clozeflashcardexp = require('./clozeflashcard.js');

//Creates Basic Flashcard object into savedflashcards.txt file
var firstPresCard = new basicflashcardexp.BasicFlashcard("Who was the first president of the United States?", "George Washington");
basicflashcardexp.BasicFlashcard.prototype.saveFlashcard = function() {
    fs.appendFile('savedflashcards.txt', JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        }
    });
};
//Function executions
firstPresCard.displayFront();
firstPresCard.displayBack();
firstPresCard.saveFlashcard();

//============================================================
//Creates Cloze Flashcard object into savedflashcards.txt file
var dragonflyCard = new clozeflashcardexp.ClozeFlashcard("Dragonflies can fly up to 50 miles per hour.", "Dragonflies");
clozeflashcardexp.ClozeFlashcard.prototype.saveFlashcard = function() {
    fs.appendFile('savedflashcards.txt', JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        }
    });
};

//Function executions
dragonflyCard.showFulltext();
dragonflyCard.showPartialTextOnly();
dragonflyCard.showClozeDeletedText();
dragonflyCard.saveFlashcard();
