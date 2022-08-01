const multer = require("multer");
const path = require("path");
const storage1 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/BannerImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage2 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/DiscountImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage3 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/FreeGiftVouchersImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage4 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/RainingDiscountImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage5 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/OurClientsImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage6 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/TrendingOffersImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage7 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/ClientTestimonialImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage8 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/TestimonialImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage9 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/BlogImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage10 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/RainingImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});
const storage11 = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/HappyClientsImages");
	},
	filename: (req, file, cb) => {
		//const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * IE9);
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const BannerUpload = multer({ storage: storage1 });
const DiscountCoupenUpload = multer({ storage: storage2 });
const FreeGiftUpload = multer({ storage: storage3 });
const RainingDiscountUpload = multer({ storage: storage4 });
const OurclientUpload = multer({ storage: storage5 });
const TrendingOffersUpload = multer({ storage: storage6 });
const ClientTestimonialImages = multer({ storage: storage7 });
const TestimonialImages = multer({ storage: storage8 });
const BlogImages = multer({ storage: storage9 });
const RainingImages = multer({ storage: storage10 });
const HappyCllientsImages = multer({ storage: storage11 });

module.exports = {
	BannerUpload,
	DiscountCoupenUpload,
	FreeGiftUpload,
	RainingDiscountUpload,
	OurclientUpload,
	TrendingOffersUpload,
	ClientTestimonialImages,
	TestimonialImages,
	BlogImages,
	RainingImages,
	HappyCllientsImages,
};
