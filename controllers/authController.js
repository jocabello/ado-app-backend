
// @dec    register user
// @route  POST /api/auth/register
// @access public
const registerUser = (req, res) => {
    res.json({message: "register user"})
}

// @dec    login user
// @route  POST /api/auth/
// @access public
const loginUser = (req, res) => {
    res.json({message: "login user"})
}

// @dec    renew token
// @route  GET /api/auth/renew
// @access public
const renewToken = (req, res) => {
    res.json({message: "renew token"})
}

// @dec    get user data
// @route  GET /api/auth/me
// @access public
const getMe = (req, res) => {
    res.json({message: "user data"})
}

module.exports = {
    loginUser,
    registerUser,
    renewToken,
    getMe
}