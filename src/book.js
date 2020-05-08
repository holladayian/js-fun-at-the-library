function createTitle(titleMod) {
return "The " + titleMod;

}
createTitle("Storm's Awakening");
createTitle("Dancing Sushi");
createTitle("Dragon in the Summer");
createTitle("Teenage Ghoul");

function buildMainCharacter(name, age, pronouns) {
  this.name = name;
  this.age = age;
  this.pronouns = pronouns;

}
var ghoulCharacter = new buildMainCharacter("Vassya", 16, "she/her");



module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  // saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
