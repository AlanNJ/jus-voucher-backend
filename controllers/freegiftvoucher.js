const db = require("../models/index");
const FreeGiftVoucher = db.freeGiftVoucher;
const DeleteFile = require("../middlewares/imageDeleter");
const getFreeGiftVoucherItems = async (req, res) => {
	try {
		const item = await FreeGiftVoucher.findAll();
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const getSingleGiftVoucherItems = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await FreeGiftVoucher.findOne({ where: { id: id } });
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const addFreeGiftVoucherItems = async (req, res) => {
	try {
		const img = req.files[0].filename;
		const { info } = req.body;
		await FreeGiftVoucher.create({ img, info });
		res.status(200).send({ message: "Item added successfully" });
	} catch (err) {
		console.log(err);
	}
};
const updateFreeGiftVoucherItem = async (req, res) => {
	try {
		const id = req.params.id;
		const img = req.files[0].filename;
		const fileItem = await FreeGiftVoucher.findOne({ where: { id: id } });

		const filePath = `./public/FreeGiftVouchersImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		const { title } = req.body;
		await FreeGiftVoucher.update({ img, info: title }, { where: { id: id } });
		res.status(200).send({ message: "Item updated successfully" });
	} catch (err) {
		console.log(err);
	}
};
const deleteFreeGiftVoucherItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await FreeGiftVoucher.findOne({ where: { id: id } });

		const filePath = `./public/FreeGiftVouchersImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await FreeGiftVoucher.destroy({ where: { id: id } });
		res.status(200).send({ message: "Item deleted successfully" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getFreeGiftVoucherItems,
	getSingleGiftVoucherItems,
	addFreeGiftVoucherItems,
	updateFreeGiftVoucherItem,
	deleteFreeGiftVoucherItem,
};
