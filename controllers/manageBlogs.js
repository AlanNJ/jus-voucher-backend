const db = require("../models/index");
const Blog = db.blog;
const BlogImage = db.blogImage;
const Comment = db.comment;
const DeleteFile = require("../middlewares/imageDeleter");
const getAllBlogs = async (req, res) => {
	try {
		const items = await Blog.findAll();
		res.status(200).send({ success: true, items });
	} catch (err) {
		console.log(err);
	}
};
const getSingleBlog = async (req, res) => {
	try {
		console.log(req.params);
		const id = req.params.id;
		const items = await Blog.findOne({ where: { id: id } });
		const comments = await Comment.findAll({
			where: { blog_id: id, approved: true },
		});
		res.status(200).send({ success: true, items, comments });
	} catch (err) {
		console.log(err);
	}
};
const updateBlog = async (req, res) => {
	try {
		const id = req.params.id;
		const { title, description, information } = req.body;
		const img = req.files[0].filename;

		let data = { title, description, information, blog_image: img };

		const fileItem = await Blog.findOne({ where: { id: id } });

		const filePath = `./public/BlogImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		const items = await Blog.update(data, { where: { id: id } });
		res.status(200).send({ success: true, items });
	} catch (err) {
		console.log(err);
	}
};
const addBlog = async (req, res) => {
	try {
		const { title, description, information } = req.body;

		const img = req.files[0].filename;
		console.log(img);

		let data = { title, description, information, blog_image: img };
		console.log(description);
		const items = await Blog.create(data);
		res.status(200).send({ success: true, items });
	} catch (err) {
		console.log(err);
	}
};
const deleteBlog = async (req, res) => {
	try {
		const id = req.params.id;
		const fileItem = await Blog.findOne({ where: { id: id } });

		const filePath = `./public/BlogImages/${fileItem.dataValues.img}`;
		DeleteFile(filePath);
		const items = await Blog.destroy({ where: { id: id } });
		res.status(200).send({ success: true, items });
	} catch (err) {
		console.log(err);
	}
};
const likeBlog = async (req, res) => {
	try {
		const id = req.params.id;
		const items = await Blog.findOne({ where: { id: id } });
		console.log(items.likes);
		let like = items.likes;
		like++;
		console.log(like);
		await Blog.update({ likes: like }, { where: { id: id } });
		res.status(200).send({ success: true, items });
	} catch (err) {
		console.log(err);
	}
};
const commentBlog = async (req, res) => {
	try {
		const id = req.params.id;
		const { content, commented_by } = req.body;
		const items = await Comment.create({ content, commented_by });
		res.status(200).send({ success: true, items });
	} catch (err) {
		console.log(err);
	}
};
const addBlogImage = async (req, res) => {
	try {
		console.log(req.body);
		const img = req.files[0].fileName;

		const items = await Blog.create(img);
		res.status(200).send({ success: true, items });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getAllBlogs,
	getSingleBlog,
	updateBlog,
	addBlog,
	deleteBlog,
	likeBlog,
	commentBlog,
	addBlogImage,
};
