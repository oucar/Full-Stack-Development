// reference: https://www.npmjs.com/package/bcrypt

const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    // use 10 or 12
    const salt = await bcrypt.genSalt(10);

    // hash a given password
    const hash = await bcrypt.hash(pw, salt);
    console.log(`SALT: ${salt}`);
    console.log(`HASH: ${hash}`);
}

// salt and has are generated.
// remember, salt is a part of hashed password as well
hashPassword('oucar');