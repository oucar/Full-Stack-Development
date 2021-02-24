// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

// INPUTS
const quantityInput = form.elements.qty;
const productInput = form.elements.product;

// OUTPUT
const ul = document.querySelector('#list');

const addPage = (qty, product) => {
    const newItem = document.createElement('li');
    newItem.textContent = `${qty} ${product}`;
    ul.append(newItem);
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    //alert(`${quantityInput.value} ${productInput.value}`);
    addPage(quantityInput.value, productInput.value);
    quantityInput.value = '';
    productInput.value = '';

})