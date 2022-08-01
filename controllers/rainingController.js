const db = require("../models/index");
const Raining = db.raining;
const DeleteFile = require("../middlewares/imageDeleter");
const getRainingItems = async (req, res) => {
	try {
		const item = await Raining.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const getSingleRainingItem = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await Raining.findOne({ where: { id: id } });
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const addRainingItem = async (req, res) => {
	try {
		const img = req.files[0].filename;
		console.log(img);
		const info = req.body.title;
		await Raining.create({ img, info });
		res.status(200).send({ message: "Item added successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const updateRainingItem = async (req, res) => {
	try {
		const id = req.params.id;
		const img = req.files[0].filename;
		const { title } = req.body;
		const info = { info: title, img };
		console.log(info);
		const fileItem = await Raining.findOne({ where: { id: id } });

		const filePath = `./public/RainingImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await Raining.update(info, { where: { id: id } }).then((res) =>
			console.log(res)
		);
		res
			.status(200)
			.send({ message: "Item updated successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const deleteRainingItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await Raining.findOne({ where: { id: id } });

		const filePath = `./public/RainingImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		console.log(id);

		await Raining.destroy({ where: { id: id } });
		res
			.status(200)
			.send({ message: "Item deleted successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getRainingItems,
	getSingleRainingItem,
	addRainingItem,
	updateRainingItem,
	deleteRainingItem,
};
