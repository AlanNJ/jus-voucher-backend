const db = require("../models/index");
const User = db.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Referals = db.Referals;

//constroller for getting all user-list
const getAllUser = async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).send(users);
	} catch (err) {
		console.log(err);
	}
};

//controller for registering a user
const addUser = async (req, res) => {
	console.log(req.body);
	try {
		const { email, password } = req.body;
		if (!password || !email) {
			return res.status(400).send({ message: "please enter all the fields" });
		}
		const user = await User.findOne({ where: { email: email } });

		if (!user) {
			if (password) {
				const info = {
					password,
					email,
				};

				const salt = await bcrypt.genSalt(12);
				//info.password = await bcrypt.hash(info.password, salt);
				const user = await User.create(info);
				/*
				if (referal_code) {
					const parent_user = await User.findOne({
						where: { referal_code: referal_code },
					});
					console.log(parent_user.name);
					if (parent_user) {
						console.log(parent_user.name);
						console.log(parent_user.name);
						const parent_name = parent_user.name;
						const refer_info = {
							refered_by: parent_name,
							refered_user: user.dataValues.name,
							refer_code: referal_code,
							checked: false,
						};
						const refer = await Referals.create(refer_info);
					}
				}
				*/
				return res
					.status(200)
					.send({ message: "User created successfully", user });
			} else {
				res.status(400).send({ message: "password donot match" });
			}
		} else {
			res.status(400).send({ message: "User already exists" });
		}
	} catch (err) {
		console.log(err);
	}
};
//constroller for deleting a user
const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		const user = await User.destroy({ where: { id: id } });
		res.status(200).send({ message: "User Deleted Successfully" });
	} catch (err) {
		console.log(err);
	}
};

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			res.status(400).send({ message: "please enter all the fields" });
		}
		const exist = await User.findOne({ where: { email } });
		if (exist) {
			const salt = await bcrypt.genSalt(12);
			const validatePassword = await bcrypt.compare(password, exist.password);
			if (validatePassword) {
				const token = jwt.sign({ _id: exist.USER_ID }, process.env.JWT_SECRET, {
					expiresIn: "7d",
				});

				res
					.status(200)
					.send({ message: "Logged In Successfully", token, exist });
			} else {
				res.status(400).send({ message: "Password Didnt Match" });
			}
		} else {
			res
				.status(400)
				.send({ message: "Please enter a valid email address !!" });
		}
	} catch (err) {
		console.log(err);
	}
};
const getSingleUser = async (req, res) => {
	try {
		const { id } = req.params;
		if (id) {
			const user = await User.findOne({ where: { id: id } });
			res.status(200).send({ success: true, user });
		} else {
			res.status(400).send("Invalid request");
		}
	} catch (err) {
		console.log(err);
	}
};
module.exports = { getAllUser, addUser, deleteUser, loginUser, getSingleUser };
