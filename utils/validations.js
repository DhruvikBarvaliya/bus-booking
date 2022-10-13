const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hashPassword = password => bcrypt.hashSync(password, salt);

const comparePassword = (hashedPassword, password) => {
    return bcrypt.compareSync(password, hashedPassword);
};

const generateUserToken = (
    _id
) => {
    const token = jwt.sign({
        _id
    },
        process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 24, issuer: process.env.JWT_ISSUER },
    );
    return token;
};

module.exports = {
    hashPassword,
    comparePassword
}