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
}

let display = document.querySelector(".display");

function showLibrary(library) {
    display.innerHTML = "";
    library.forEach( book => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = book.info();
        display.appendChild(card);
    });
}

document.getElementById("new-book-btn").addEventListener("click", () => {
    document.getElementById("my-dialog").showModal();
});

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(event.target);
    const title = formData.get("book-title");
    const author = formData.get("book-author");
    const pages = Number(formData.get("book-pages"));
    const read = document.getElementById("book-read").checked;

    addBookToLibrary(title, author, pages, read);

    form.reset();
})

document.querySelector("#form-close").addEventListener("click", () => {
        document.getElementById("my-dialog").close();
        const form = document.querySelector("form");
        form.reset();
        showLibrary(library);
    }
)