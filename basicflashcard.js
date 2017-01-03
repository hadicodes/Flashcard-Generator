// 5: Pushed project to github
// 5: Constructor and prototype used to hold methods for basic flash cards
// 5: Constructor and prototype used to hold basic methods for cloze-deleted flash cards
// 5: Properly fill out readme with examples of each constructor and the methods (use request's npm page as an example of the depth we're looking for)
// 5: 2 modules used to hold each constructor, and a 3rd file used as a single entry point which exports both.
// 5: ClozeCard has property or method that returns only the cloze-deleted portion of the text
// 5: ClozeCard has property or method that returns only the partial text
// 5: ClozeCard throws error if it is not able to figure out where the cloze-deletion should go.
// +5: create a review script "front end (in node)" that is recursive and uses inquirer
// +5: use promise for reading json from separate file along with any other async functions that may be needed

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
