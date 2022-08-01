const db = require("../models/index");
const ClientTestimonials = db.clientTestimonial;
const DeleteFile = require("../middlewares/imageDeleter");
const getClientTestimonialsItems = async (req, res) => {
	try {
		const item = await ClientTestimonials.findAll();
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const getSingleClientTestimonialsItem = async (req, res) => {
	try {
		const id = req.params.id;
		const item = await ClientTestimonials.findOne({ where: { id: id } });
		res.status(200).send(item);
	} catch (err) {
		console.log(err);
	}
};
const addClientTestimonialsItem = async (req, res) => {
	try {
		console.log(req.body);
		const { message, email, approved, role, name } = req.body;
		await ClientTestimonials.create({
			message,
			email,
			approved,
			role,
			name,
		});
		res.status(200).send({ message: "Item added successfully" });
	} catch (err) {
		console.log(err);
	}
};
const updateClientTestimonialsItem = async (req, res) => {
	try {
		const id = req.params.id;
		const img = req.files[0].filename;
		const fileItem = await ClientTestimonials.findOne({ where: { id: id } });

		const filePath = `./public/ClientTestimonialImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		const { message, email, approved, role, name } = req.body;
		await ClientTestimonials.update(
			{ img, message, email, approved, role, name },
			{ where: { id: id } }
		);
		res.status(200).send({ message: "Item updated successfully" });
	} catch (err) {
		console.log(err);
	}
};
const deleteClientTestimonialsItem = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await ClientTestimonials.findOne({ where: { id: id } });

		const filePath = `./public/ClientTestimonial/${fileItem.dataValues.img}`;
		DeleteFile(filePath);

		await ClientTestimonials.destroy({ where: { id: id } });
		res.status(200).send({ message: "Item deleted successfully" });
	} catch (err) {
		console.log(err);
	}
};
const approveClientTestimonialsItem = async (req, res) => {
	try {
		const id = req.params.id;

		await ClientTestimonials.update({ approved: true }, { where: { id: id } });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getClientTestimonialsItems,
	getSingleClientTestimonialsItem,
	addClientTestimonialsItem,
	updateClientTestimonialsItem,
	deleteClientTestimonialsItem,
	approveClientTestimonialsItem,
};
