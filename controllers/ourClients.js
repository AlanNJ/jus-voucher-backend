const db = require("../models/index");
const OurClients = db.ourClient;
const DeleteFile = require("../middlewares/imageDeleter");
const getOurClientsItems = async (req, res) => {
	try {
		const item = await OurClients.findAll();
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const getSingleOurClientsItems = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await OurClients.findOne({ where: { id: id } });
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const addOurClientsItems = async (req, res) => {
	try {
		const img = req.files[0].filename;
		const { name, role } = req.body;
		await OurClients.create({ img, name, role });
		res.status(200).send({ message: "Item added successfully" });
	} catch (err) {
		console.log(err);
	}
};
const updateOurClientsItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await OurClients.findOne({ where: { id: id } });

		const filePath = `./public/OurClientsImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		const img = req.files[0].filename;
		const { name, role } = req.body;
		await OurClients.update({ img, name, role }, { where: { id: id } });
		res.status(200).send({ message: "Item updated successfully" });
	} catch (err) {
		console.log(err);
	}
};
const deleteOurClientsItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await OurClients.findOne({ where: { id: id } });

		const filePath = `./public/OurClientsImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await OurClients.destroy({ where: { id: id } });
		res.status(200).send({ message: "Item deleted successfully" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getOurClientsItems,
	getSingleOurClientsItems,
	addOurClientsItems,
	updateOurClientsItem,
	deleteOurClientsItem,
};
