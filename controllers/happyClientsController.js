const db = require("../models/index");
const HappyClients = db.happyClients;
const DeleteFile = require("../middlewares/imageDeleter");
const getHappyClientsItems = async (req, res) => {
	try {
		const item = await HappyClients.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const getSingleHappyClientsItem = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await HappyClients.findOne({ where: { id: id } });
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const addHappyClientsItem = async (req, res) => {
	try {
		const img = req.files[0].filename;
		console.log(img);
		console.log(req.body);
		const name = req.body.name;
		let message = req.body.message;
		await HappyClients.create({ img, name, message });
		res.status(200).send({ message: "Item added successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const updateHappyClientsItem = async (req, res) => {
	try {
		const id = req.params.id;

		const img = req.files[0].filename;
		const { title } = req.body;
		const info = { info: title, img };
		console.log(info);
		const fileItem = await HappyClients.findOne({ where: { id: id } });

		const filePath = `./public/HappyClientsImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await HappyClients.update(info, { where: { id: id } }).then((res) =>
			console.log(res)
		);
		res
			.status(200)
			.send({ message: "Item updated successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const deleteHappyClientsItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await HappyClients.findOne({ where: { id: id } });

		const filePath = `./public/HappyClientsImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		console.log(id);

		await HappyClients.destroy({ where: { id: id } });
		res
			.status(200)
			.send({ message: "Item deleted successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getHappyClientsItems,
	getSingleHappyClientsItem,
	addHappyClientsItem,
	updateHappyClientsItem,
	deleteHappyClientsItem,
};
