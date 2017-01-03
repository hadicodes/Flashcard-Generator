//Create a ClozeFlashard constructor. It should accept text and cloze arguments.
// ClozeFlashcard should have a method that returns only the cloze-deleted portion of the text.
// You are free to experiment with the other details of your implementation, but you must store at least one property, and equip cloze-deleted flashcards with at least one additional method.
// Your application should provide a way for users to save any flashcards they might create to a text file.
// What data should you save?
// Where might it make sense to add a method for saving flashcards?

module.exports.ClozeFlashcard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.showFulltext = function() {
        console.log(this.text);
    };
    this.showPartialTextOnly = function() {
        var partialText = text.split(" ").slice(3).join(" ");
        console.log(partialText);
    };
    this.showClozeDeletedText = function() {
        console.log(this.cloze);
    };
};
