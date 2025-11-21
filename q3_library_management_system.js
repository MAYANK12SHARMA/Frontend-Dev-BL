class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`Book "${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`Book "${this.title}" has been issued successfully.`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`Book "${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`Book "${this.title}" has been returned successfully.`);
    return true;
  }
}

const books = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "ISBN001"),
  new Book("1984", "George Orwell", "ISBN002"),
  new Book("To Kill a Mockingbird", "Harper Lee", "ISBN003"),
  new Book("Pride and Prejudice", "Jane Austen", "ISBN004"),
  new Book("The Catcher in the Rye", "J.D. Salinger", "ISBN005")
];

function displayAvailableBooks() {
  console.log("\nAvailable Books:");
  const availableBooks = books.filter(book => !book.isIssued);
  availableBooks.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
  });
}

function issueBookByISBN(isbn) {
  const book = books.find(book => book.ISBN === isbn);
  if (book) {
    book.issueBook();
  } else {
    console.log("Book not found with given ISBN.");
  }
}

displayAvailableBooks();
issueBookByISBN("ISBN002");
displayAvailableBooks();
issueBookByISBN("ISBN002");
