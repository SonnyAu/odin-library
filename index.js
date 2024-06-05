const myLibrary = [];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return `${this.name} by ${this.author}, ${this.pages} pages, ${this.status}`;
  };
}

function addBookToLibrary() {
  console.log("BILAL RON");
  let name = prompt("Book name?");
  let author = prompt("Book author?");
  let pages = prompt("Book pages?");
  let status = "not read";
  let newBook = new Book(name, author, pages, status);

  let newBookCard = document.createElement("div");
  newBookCard.classList.add("card");

  let cardTitle = document.createElement("h2");
  cardTitle.textContent = newBook.name;

  let cardAuthor = document.createElement("p");
  cardAuthor.textContent = `Author: ${newBook.author}`;

  let cardPages = document.createElement("p");
  cardPages.textContent = `Pages: ${newBook.pages}`;

  let cardStatus = document.createElement("p");
  cardStatus.textContent = `Status: ${newBook.status}`;

  // Create a delete button
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", function () {
    deleteBook(newBookCard);
  });
  // Create a change status button
  let statusButton = document.createElement("button");
  statusButton.textContent = "Change Status";
  statusButton.classList.add("status-btn");
  statusButton.addEventListener("click", function () {
    changeStatus(newBookCard, cardStatus);
  });

  // Append all elements to the new book card
  newBookCard.append(
    cardTitle,
    cardAuthor,
    cardPages,
    cardStatus,
    deleteButton,
    statusButton
  );
  document.querySelector(".library").appendChild(newBookCard);

  myLibrary.push(newBookCard);
  newBookCard.number = myLibrary.length - 1; // Setting the number property to the last index
  console.log(newBookCard.number);
}

function deleteBook(card) {
  const index = card.number;
  myLibrary.splice(index, 1); // Remove the book from the library array
  card.remove(); // Remove the card from the DOM

  // Update the number property for all cards after the deleted one
  for (let i = index; i < myLibrary.length; i++) {
    myLibrary[i].number = i;
  }
}
function changeStatus(card, cardStatus) {
  const index = card.number;
  const book = myLibrary[index];
  book.status = book.status === "not read" ? "read" : "not read";

  cardStatus.textContent = `Status: ${book.status}`;
}
