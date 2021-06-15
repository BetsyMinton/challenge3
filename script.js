import Book from "./book.js";

const potter = new Book("Harry Potter", "J.K. Rowling", 1996, "fantasy", true);

const matilda = new Book("Matilda", "Roald Dahl", 1989, "fiction", true);

const bean = new Book(
  "Unbearable Likeness of Being",
  "Kundera",
  1984,
  "fiction",
  false
);

const games = new Book(
  "The Hunger Games",
  "Suzanne Collins",
  2008,
  "fiction",
  true
);

const mockingbird = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "fiction",
  false
);

console.log("I like to read", potter);
console.log("I like to read", matilda);
console.log("I like to read", bean);
console.log("I like to read", games);
console.log("I like to read", mockingbird);
