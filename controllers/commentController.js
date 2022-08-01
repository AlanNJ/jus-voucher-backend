const db = require("../models/index");
const Blog = db.blog;
const BlogImage = db.blogImage;
const Comment = db.comment;
const getAllcomments = async (req, res) => {
	const id = req.params.id;
	const approvedComments = await Comment.findAll({
		where: { blog_id: id, approved: true },
	});
	const unapprovedComments = await Comment.findAll({
		where: { blog_id: id, approved: false },
	});
	res.status(200).send({ approvedComments, unapprovedComments });
};
const addComment = async (req, res) => {
	try {
		const { name, comment, approved, blog_id } = req.body;
		await Comment.create({ name, comment, approved, blog_id });
		res.status(200).send("Comment Posted Successfully");
	} catch (err) {
		console.log(err);
	}
};
const approveComment = async (req, res) => {
	try {
		console.log("hello");
		const id = req.params.id;

		await Comment.update({ approved: true }, { where: { id: id } }).then(() => {
			res.status(200).send({ success: true });
		});
	} catch (err) {
		console.log(err);
	}
};
module.exports = { getAllcomments, addComment, approveComment };
