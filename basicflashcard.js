module.exports.BasicFlashcard = function(front, back) {
    this.front = front;
    this.back = back;
    this.displayFront = function() {
        console.log("Front: " + this.front);
    };
    this.displayBack = function() {
        console.log("Back: " + this.back);
    };
};
