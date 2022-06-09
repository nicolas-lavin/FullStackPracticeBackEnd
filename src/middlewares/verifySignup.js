const User = require('../models').User;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({where: {userName: req.body.userName} });
    if(user) return res.status(400).send({message: "Failed! Username is already in use!"});
    const email = await User.findOne({where: {email: req.body.email}});
    if(email) return res.status(400).send({message: "Failed! Email is already in use!"});
    next();
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
}

module.exports = verifySignUp;