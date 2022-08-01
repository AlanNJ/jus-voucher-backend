const { expressjwt } = require("express-jwt");

const requireSignIn = expressjwt({
	secret: process.env.JWT_SECRET,
	algorithms: ["HS256"],
});
module.exports = requireSignIn;
