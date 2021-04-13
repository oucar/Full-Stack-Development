const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { // two parameters //! return new Promise
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve(`Your fake data is here: ${url}`);
            } else {
                reject(`Connection to ${url} is rejected.`);
            }
        }, 1000)
    })

}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("Done with request");
        console.log(data);
    })
    .catch((err) => {
        console.log("Oh no! ", err)
    })




// Delayed color change program using promises.
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve(); // no need to reject here.
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))