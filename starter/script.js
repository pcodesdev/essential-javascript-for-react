const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
// Destructuring
const book = getBook(2);
// const title = book.title;
// Real Destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

// const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre);

// The Spread Operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, ...otherGenres);
console.log(otherGenres);

// Taking values out of the array

const newGenre = [...genres, "programming"];

console.log(newGenre);

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2014-12-01",
  // overwriting existing property
  pages: 1210,
};

console.log(updatedBook);

// Template Literals

const summary = `${title} is a book of the genre ${primaryGenre} containing ${pages} pages and written by the ${author} in the year ${publicationDate}`;

summary;

// Ternary Operations
const pagesRange = pages > 1000 ? `${pages}` : "less than 1000";
console.log(pagesRange);

// Arrow Functions
// Best for use with one liner functions
const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// Logical Operators
// logical and
console.log(true && "is a book of the genre");
console.log(hasMovieAdaptation && "This book is a movie");

// Falsy Values : null,0,"",undefined
console.log(0 && "Peter");

// logical or
console.log(true || "something");

console.log(book.translations.spanish || "Not Translated");

// Nuelsing Cualesing operator
// always returns the second value when the first calue is null or undefined
const count = book.reviews.librarything.ratingsCount ?? "no data";
count;

// Optional Chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.librarything.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

/*
// The Array map method

const books = getBooks();

const titles = books.map((book) => book.title);
titles;
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

essentialData;

// Array Filter Methods

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

longBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce Method
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// Array Sort Method
const arr = [1, 4, 7, 2, 9, 3];
// use the slice method to to avoid mutating the array
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// working with immutable arrays
// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of secrets",
  author: "J.K. Peters",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;
// 2) Delete book object from an array

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

booksAfterDelete;

// 3) Update book object in an array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 2000 } : book
);

booksAfterUpdate;
*/

// Asynchronous - Promise
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// Asynchronous - Aync Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");

  const data = await res.json();
  console.log(data);
}

getTodos();
