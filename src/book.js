function createTitle(titleMod) {
return "The " + titleMod;

}
createTitle("Storm's Awakening");
createTitle("Dancing Sushi");
createTitle("Dragon in the Summer");
createTitle("Teenage Ghoul");

function buildMainCharacter() {
return {name: "Vassya", age: 16, pronouns: "she/her"};
}



module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  // saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
