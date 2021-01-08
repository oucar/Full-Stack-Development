// Event Bubbling -- Deleting
const list = document.querySelector("#book-list ul");
list.addEventListener('click', function(e) {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li); // or simply list.removeChild(li);
  };
});

// Fetch the 'add-book' form
const addForm = document.forms['add-book']; // you add the event listener to the form, not to the button.
addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteButton = document.createElement('span');

  // add content
  deleteButton.textContent = 'delete';
  bookName.textContent = value;

  // add classes
  // var li = document.querySelector('li:last-child');
  // var book = document.querySlector('li:first-child.name');
  //book.getAttribute('class');
  //book.setAttribute('class', ''name-2);
  bookName.classList.add('name');
  deleteButton.classList.add('delete')

  // append spans to the li, then append li to the document (see the dom tree)
  li.appendChild(bookName);
  li.appendChild(deleteButton);
  list.appendChild(li); // line 2

;

});
