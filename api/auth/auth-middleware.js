const { JWT_SECRET } = require("../secrets"); // use this secret!

const restricted = (req, res, next) => {
  next()
}

const only = role_name => (req, res, next) => {
}


const checkUsernameExists = (req, res, next) => {
}


const validateRoleName = (req, res, next) => {
}

module.exports = {
  restricted,
  checkUsernameExists,
  validateRoleName,
  only,
}
