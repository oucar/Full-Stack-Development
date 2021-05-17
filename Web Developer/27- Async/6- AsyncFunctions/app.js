// ! async functions return a promise by default!

// async function hello() {
// }

const sing = async () => {
    throw "OH NO, PROBLEM!" // - rejected
    return 'LA LA LA LA' // + resolved
}

sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })


// login example 
const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'Welcome!'
    throw 'Invalid!' // else
}

// missing cr.
login('onur')
    .then(msg => {
        console.log('Logged in!');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })

login('anything', 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })


//await works with async, not without
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"                      // this will be the resolved promise
}

async function printRainbow(){
    await rainbow();                        // ! EXECUTE RAINBOW AND THEN CONSOLE.LOG BELOW!
    console.log("rainbow is finished executing using the await keyboard!")
}

printRainbow();


// Handling rejections

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


async function makeTwoRequests() {              // rejecting using try and catch 
    try {                                       // if it's error prone, go to catch statement
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {                               // ! rejecting
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)             // in this example, it will be "Connection Timeout :( from rejection state"
    }

}