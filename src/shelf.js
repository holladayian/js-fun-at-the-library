function shelfBook(book, shelf) {
  return {

  shelf: scifiShelf.push(shelf),
  book: book,
  };
}

module.exports = {
  shelfBook: shelfBook,
  // unshelfBook: unshelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};
