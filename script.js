const library = [];

function Book(title, author, pages, read) {
    if(!new.target) {
        throw new Error("Ughhhh, use new to define");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    library.push(newBook);
    return library;
}

const display = document.querySelector(".display");

function showLibrary(library) {
    library.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = book.info();
        display.appendChild(card);
    });
}