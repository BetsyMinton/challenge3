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


const potterBook = `
<div><bookCover><h1>${potter.title}</h1>
<ul>
  <li>Author: ${potter.author}</li>
<li>Date Published: ${potter.datePublished}</li>
<li>Genre: ${potter.genre}</li>
<li>In Library: ${potter.isOwned}</li>
</ul></bookCover></div>
`;

const gamesBook = `
<div><bookCover><h1>${games.title}</h1>
<ul>
  <li>Author: ${games.author}</li>
<li>Date Published: ${games.datePublished}</li>
<li>Genre: ${games.genre}</li>
<li>In Library: ${games.isOwned}</li>
</ul></bookCover></div>
`;

const beanBook = `
<div><bookCover><h1>${bean.title}</h1>
<ul>
  <li>Author: ${bean.author}</li>
<li>Date Published: ${bean.datePublished}</li>
<li>Genre: ${bean.genre}</li>
<li>In Library: ${bean.isOwned}</li>
</ul></bookCover></div>
`;

const matildaBook = `
<div><bookCover><h1>${matilda.title}</h1>
<ul>
  <li>Author: ${matilda.author}</li>
<li>Date Published: ${matilda.datePublished}</li>
<li>Genre: ${matilda.genre}</li>
<li>In Library: ${matilda.isOwned}</li>
</ul></bookCover></div>
`;

const mockingbirdBook = `
<div><bookCover><h1>${mockingbird.title}</h1>
<ul>
  <li>Author: ${mockingbird.author}</li>
<li>Date Published: ${mockingbird.datePublished}</li>
<li>Genre: ${mockingbird.genre}</li>
<li>In Library: ${mockingbird.isOwned}</li>
</ul></bookCover></div>
`;

document.getElementById("book1").innerHTML = potterBook;
document.getElementById("book2").innerHTML = gamesBook;
document.getElementById("book3").innerHTML = beanBook;
document.getElementById("book4").innerHTML = mockingbirdBook;
document.getElementById("book5").innerHTML = matildaBook;
