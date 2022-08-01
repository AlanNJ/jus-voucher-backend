const db = require("../models/index");
const DeleteFile = require("../middlewares/imageDeleter");
const DiscountCoupens = db.discountCoupen;
const getDiscountCoupensItems = async (req, res) => {
	try {
		const item = await DiscountCoupens.findAll();
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const getSingleDiscountCoupensItem = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await DiscountCoupens.findOne({ where: { id: id } });
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const addDiscountCoupensItem = async (req, res) => {
	try {
		const img = req.files[0].filename;
		const info = req.body.title;
		await DiscountCoupens.create({ img, info });
		res.status(200).send({ message: "Item added successfully" });
	} catch (err) {
		console.log(err);
	}
};
const updateDiscountCoupensItem = async (req, res) => {
	try {
		const id = req.params.id;
		const img = req.files[0].filename;
		const fileItem = await DiscountCoupens.findOne({ where: { id: id } });

		const filePath = `./public/DiscountImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		const { title } = req.body;
		await DiscountCoupens.update({ img, info: title }, { where: { id: id } });
		res.status(200).send({ message: "Item updated successfully" });
	} catch (err) {
		console.log(err);
	}
};
const deleteDiscountCoupensItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await DiscountCoupens.findOne({ where: { id: id } });

		const filePath = `./public/DiscountImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await DiscountCoupens.destroy({ where: { id: id } });
		res.status(200).send({ message: "Item deleted successfully" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getDiscountCoupensItems,
	getSingleDiscountCoupensItem,
	addDiscountCoupensItem,
	updateDiscountCoupensItem,
	deleteDiscountCoupensItem,
};
