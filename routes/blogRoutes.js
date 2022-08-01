const blogsController = require("../controllers/manageBlogs");
const router = require("express").Router();
const uploader = require("../middlewares/imageUpload");
const commentController = require("../controllers/commentController");

router.post(
	"/add-blog",
	uploader.BlogImages.array("img", 2),
	blogsController.addBlog
);
router.get("/get-all-blog", blogsController.getAllBlogs);
router.get("/get-single-blog/:id", blogsController.getSingleBlog);
router.delete("/delete-blog/:id", blogsController.deleteBlog);
router.get("/like-blog/:id", blogsController.likeBlog);

router.put(
	"/update-blog/:id",
	uploader.BlogImages.array("img", 2),
	blogsController.addBlog,
	blogsController.updateBlog
);
module.exports = router;

router.post(
	"/add-article",
	uploader.BannerUpload.array("img", 2),
	blogsController.addBlogImage
);
router.get("/get-blog-comments/:id", commentController.getAllcomments);
router.post("/add-comment", commentController.addComment);
router.put("/approve-comment/:id", commentController.approveComment);
