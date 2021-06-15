const Book = class {
  constructor(title, author, datePublished, genre, isOwned) {
    this.title = title;
    this.author = author;
    this.datePublished = datePublished;
    this.genre = genre;
    this.isOwned = isOwned;
  }
  toggleOwned(owned) {
    this.isOwned = owned;
  }
};

export default Book;
