# Flashcard-Generator

Flashcard-Generator is the backend for a basic flashcard application.

The application creates flashcards of 2 types; **1) Basic Flashcards** which will display a *front* side, which will display a question and a *back* side, which displays the answer to the question on the front of the flashcard and **2) Cloze-Deleted Flashcards** which present only partial text of te flash card intitially and then the fullt text when the user requests it. 


---

## Pre-requisites

* Install Node.js. visit https://nodejs.org/en/ and download
* Command Line Terminal in Unix or Command Prompt in Windows


## Getting Started

This Flashcard-Generator uses the node CLI in terminal and does not require any npm package installation. Simply navigate to the main top-tier folder called Flashcard-Generator  and then run node index.js in the cli.

### Examples of constructors and Methods
Constructor Examples for basic & cloze flashcards
```
var yourbasicFlashcardName = new basicflashcardexp.BasicFlashcard(front, back);
var yourclozeFlashcardName = new clozeflashcardexp.ClozeFlashcard(text, cloze);
```
Examples of Methods to show the front and back of basic flashcards
```
yourbasicFlashcardName.displayFront();
yourbasicFlashcardName.displayBack();
```
Similarly, here are examples of methods for showing full text and partial text for cloze flashcards
```
yourclozeFlashcardName.showFulltext();
yourclozeFlashcardName.showPartialTextOnly();
```

## Built With

* Node.js
* Sublime Text



## Versioning

V1.0

## Authors

* **Hadi Yousufi** - *Author* - [Hadi Yousufi](https://github.com/hadicodes)


## License

This project is opensourced for anyone who wishes to use it.

## Acknowledgments

* NU Coding Boot Camp Staff
* Google





