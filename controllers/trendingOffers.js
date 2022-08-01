const db = require("../models/index");
const TrendingOffers = db.trendingOffer;
const DeleteFile = require("../middlewares/imageDeleter");
const getTrendingOffersItems = async (req, res) => {
	try {
		const item = await TrendingOffers.findAll();
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const getSingleTrendingOffersItem = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await TrendingOffers.findOne({ where: { id: id } });
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const addTrendingOffersItem = async (req, res) => {
	try {
		const img = req.files[0].filename;
		const info = req.body.title;
		await TrendingOffers.create({ img, info });
		res.status(200).send({ message: "Item added successfully" });
	} catch (err) {
		console.log(err);
	}
};
const updateTrendingOffersItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await TrendingOffers.findOne({ where: { id: id } });

		const filePath = `./public/TrendingOffersImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		const img = req.files[0].filename;
		const { title } = req.body;
		await TrendingOffers.update({ img, info: title }, { where: { id: id } });
		res.status(200).send({ message: "Item updated successfully" });
	} catch (err) {
		console.log(err);
	}
};
const deleteTrendingOffersItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await TrendingOffers.findOne({ where: { id: id } });

		const filePath = `./public/TrendingOffersImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await TrendingOffers.destroy({ where: { id: id } });
		res.status(200).send({ message: "Item deleted successfully" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getTrendingOffersItems,
	getSingleTrendingOffersItem,
	addTrendingOffersItem,
	updateTrendingOffersItem,
	deleteTrendingOffersItem,
};
