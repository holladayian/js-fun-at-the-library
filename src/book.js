function createTitle(titleMod) {
return "The " + titleMod;

}
// var bookIdea = createTitle("Storm's Awakening");
// var sushiTitle = createTitle("Dancing Sushi");
// var dragonTitle = createTitle("Dragon in the Summer");
// var ghoulTitle = createTitle("Teenage Ghoul");

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns};
}
// var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");



// reviews = [];

function saveReview(newReview, reviews) {
if (!reviews.includes(newReview)) {
reviews.push(newReview);
  };
}




// saveReview("An astounding success");
// saveReview("A page turner!");
// saveReview("An instant classic!");

function calculatePageCount(bookTitle) {
return (bookTitle.length * 20);

}
// var ghoulPages = calculatePageCount(ghoulTitle);
// calculatePageCount(dragonTitle);

function writeBook(bookTitle, mainCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
// var ghoulBook = writeBook(ghoulTitle, ghoulCharacter , ghoulPages, "fantasy");
}

function editBook(bookTitle) {
   return (bookTitle.length * 15);


}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
