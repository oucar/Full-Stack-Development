// remember the credit card thing on best buy..
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})

// event fires when you click somewhere else
const input2 = document.querySelector("#input2")
const secondH1 = document.querySelector("#secondH1");

input2.addEventListener('change', function (e) {        // if there is a change
    secondH1.textContent = input2.value;
})

