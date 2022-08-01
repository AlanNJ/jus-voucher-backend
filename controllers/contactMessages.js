const db = require("../models/index");
const ContactMessage = db.contactMessage;
const DeleteFile = require("../middlewares/imageDeleter");

const getAllMessages = async (req, res) => {
	try {
		const item = await ContactMessage.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const sendMessage = async (req, res) => {
	console.log(req.body);
	try {
		const { firstName, lastName, phoneNo, email, message } = req.body;
		const info = {
			first_name: firstName,
			last_name: lastName,
			phone: phoneNo,
			email,
			message,
		};
		await ContactMessage.create(info);
		res.status(200).send({ message: "Message sent" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getAllMessages, sendMessage };
