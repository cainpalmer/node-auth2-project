const router = require("express").Router();
const { checkUsernameExists, validateRoleName } = require('./auth-middleware');
const { JWT_SECRET } = require("../secrets"); // use this secret!

router.post("/register", validateRoleName, (req, res, next) => {
});


router.post("/login", checkUsernameExists, (req, res, next) => {
});

module.exports = router;
