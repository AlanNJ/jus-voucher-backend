const db = require("../models/index");
const Testimonial = db.testimonial;
const DeleteFile = require("../middlewares/imageDeleter");
const getTestimonialItems = async (req, res) => {
	try {
		const item = await Testimonial.findAll();
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const getSingleTestimonialItem = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await Testimonial.findOne({ where: { id: id } });
		res.status(200).send({ success: true, item });
	} catch (err) {
		console.log(err);
	}
};
const addTestimonialItem = async (req, res) => {
	try {
		const { name, designation, testimonial } = req.body;

		const info = { name, designation, testimonial };
		await Testimonial.create(info);
		res.status(200).send({ message: "Item added successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const deleteTestimonialItem = async (req, res) => {
	try {
		const id = req.params.id;
		console.log(id);

		await Testimonial.destroy({ where: { id: id } });
		res
			.status(200)
			.send({ message: "Item deleted successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};
const updateTestimonialItem = async (req, res) => {
	try {
		const id = req.params.id;
		console.log(id);
		const { name, designation, testimonial } = req.body;
		let info = { name, designation, testimonial };
		await Testimonial.update(info, { where: { id: id } });
		res
			.status(200)
			.send({ message: "Item deleted successfully", success: true });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getSingleTestimonialItem,
	getTestimonialItems,
	addTestimonialItem,
	deleteTestimonialItem,
	updateTestimonialItem,
};
