const e = require("express");
const { JWT_SECRET } = require("../secrets"); // use this secret!

const restricted = (req, res, next) => {
  next()
}

const only = role_name => (req, res, next) => {
  next()
}


const checkUsernameExists = (req, res, next) => {
  next()
}


const validateRoleName = (req, res, next) => {
  if (!req.body.role_name || !req.body.role_name.trim()) {
    req.role.name = 'student'
    next()
  } else if (req.body.role_name.trim() === 'admin') {
    next({status: 422, message: 'Role name can not be admin'})
  } else if (req.body.role_name.trim().length > 32) {
    next({status: 422, message: 'Role name can not be longer than 32 chars'})
  } else {
    next()
  }
}

module.exports = {
  restricted,
  checkUsernameExists,
  validateRoleName,
  only,
}
