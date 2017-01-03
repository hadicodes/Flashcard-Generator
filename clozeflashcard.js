module.exports.ClozeFlashcard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.showFulltext = function() {
        console.log(this.text);
    };
    this.showPartialTextOnly = function() {
        var partialText = this.text.replace(this.cloze, '_____???_____');
        if (this.text.includes(this.cloze)) {
            console.log(partialText);
        } else {
            console.log('Error, the location of the cloze deletion isn\'t found');
        }
    };
    this.showClozeDeletedText = function() {
        console.log(this.cloze);
    };
};
