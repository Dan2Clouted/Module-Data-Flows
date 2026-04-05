let myLibrary = [];

window.addEventListener("load", function () {
  populateStorage();
});

function populateStorage() {
  if (myLibrary.length === 0) {
    const book1 = new Book("Robinson Crusoe", "Daniel Defoe", 252, true);
    const book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      127,
      true
    );

    myLibrary.push(book1, book2);
    render();
  }
}

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("check");

function submit() {
  const titleValue = titleInput.value.trim();
  const authorValue = authorInput.value.trim();
  const pagesValue = Number(pagesInput.value);

  if (
    titleValue === "" ||
    authorValue === "" ||
    !pagesValue ||
    pagesValue <= 0
  ) {
    alert("Please enter valid input!");
    return;
  }

  const book = new Book(
    titleValue,
    authorValue,
    pagesValue,
    readCheckbox.checked
  );

  myLibrary.push(book);
  render();

  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readCheckbox.checked = false;
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function render() {
  const table = document.getElementById("display");

  table.innerHTML = `
    <thead class="thead-dark">
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Number of Pages</th>
        <th>Read</th>
        <th></th>
      </tr>
    </thead>
  `;

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const row = table.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const deleteCell = row.insertCell(4);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;

    const toggleReadBtn = document.createElement("button");
    toggleReadBtn.className = "btn btn-success";
    toggleReadBtn.textContent = book.isRead ? "Yes" : "No";

    toggleReadBtn.addEventListener("click", function () {
      book.isRead = !book.isRead;
      render();
    });

    readCell.appendChild(toggleReadBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-warning";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
      myLibrary.splice(i, 1);
      render();
      alert(`Deleted: ${book.title}`);
    });

    deleteCell.appendChild(deleteBtn);
  }
}

window.submit = submit;
