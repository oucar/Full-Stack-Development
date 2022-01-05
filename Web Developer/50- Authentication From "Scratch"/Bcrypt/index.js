// reference: https://www.npmjs.com/package/bcrypt

const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    // use 10 or 12
    const salt = await bcrypt.genSalt(12);

    // hash a given password
    const hash = await bcrypt.hash(pw, salt);
    console.log(`SALT: ${salt}`);
    console.log(`HASH: ${hash}`);
}

const login = async (pw, hashedPw) => {
    // returns true or false
    const result = await bcrypt.compare(pw, hashedPw);

    if(result === true){
        console.log("Logged in successfully.");
    } else{
        console.log("Can't log in.");
    }

}

// salt and has are generated.
// remember, salt is a part of hashed password as well
// salt always changes -> randomness
hashPassword('oucar');


// oucar
// $2b$12$gz8.ZiLHKhXc43mG1YTpT.DPv0p2GLppie3p3o2JU.24jjP2BOOI2
login('oucar', '$2b$12$gz8.ZiLHKhXc43mG1YTpT.DPv0p2GLppie3p3o2JU.24jjP2BOOI2');