// ! sync functions return a promise by default!

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