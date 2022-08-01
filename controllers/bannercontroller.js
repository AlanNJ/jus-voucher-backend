const db = require("../models/index");
const Banner = db.banner;
const fs = require("fs");
const DeleteFile = require("../middlewares/imageDeleter");
const getBannerItems = async (req, res) => {
	try {
		const item = await Banner.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const getSingleBannerItem = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await Banner.findOne({ where: { id: id } });
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const addBannerItem = async (req, res) => {
	try {
		const img = req.files[0].filename;
		console.log(img);
		const info = req.body.title;
		await Banner.create({ img, info });
		res.status(200).send({ message: "Item added successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const updateBannerItem = async (req, res) => {
	try {
		const id = req.params.id;
		const img = req.files[0].filename;
		const { title } = req.body;
		const info = { info: title, img };
		console.log(info);
		const fileItem = await Banner.findOne({ where: { id: id } });

		const filePath = `./public/BannerImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await Banner.update(info, { where: { id: id } }).then((res) =>
			console.log(res)
		);

		res
			.status(200)
			.send({ message: "Item updated successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const deleteBannerItem = async (req, res) => {
	try {
		const id = req.params.id;

		const fileItem = await Banner.findOne({ where: { id: id } });

		const filePath = `./public/BannerImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		await Banner.destroy({ where: { id: id } }).then((res) => console.log(res));
		res
			.status(200)
			.send({ message: "item deleted successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getBannerItems,
	getSingleBannerItem,
	addBannerItem,
	updateBannerItem,
	deleteBannerItem,
};
