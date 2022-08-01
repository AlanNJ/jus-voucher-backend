const bannerItem = require("../controllers/bannercontroller");
const discountCoupens = require("../controllers/discountCoupen");
const freeGiftVoucher = require("../controllers/freegiftvoucher");
//const rainingDiscounts = require("../controllers/c");
const ourClient = require("../controllers/ourClients");
const trendingOffer = require("../controllers/trendingOffers");
const clientTestimonial = require("../controllers/clientTestimonial");
const testimonial = require("../controllers/testimonial");
const raining = require("../controllers/rainingController");
const happyClients = require("../controllers/happyClientsController");

const uploader = require("../middlewares/imageUpload");

const router = require("express").Router();
//banner routes
router.get("/get-banner-items", bannerItem.getBannerItems);

router.get("/get-single-banner-item/:id", bannerItem.getSingleBannerItem);
router.put(
	"/update-banner-item/:id",
	uploader.BannerUpload.array("img", 2),
	bannerItem.updateBannerItem
);
router.post(
	"/add-banner-items",
	uploader.BannerUpload.array("img", 2),
	bannerItem.addBannerItem
);
router.delete("/delete-banner-item/:id", bannerItem.deleteBannerItem);

//discount coupens
router.get("/get-discount-items", discountCoupens.getDiscountCoupensItems);
router.get(
	"/get-single-discount-item/:id",
	discountCoupens.getSingleDiscountCoupensItem
);
router.put(
	"/update-discount-item/:id",
	uploader.DiscountCoupenUpload.array("img", 2),
	discountCoupens.updateDiscountCoupensItem
);
router.post(
	"/add-discount-items",
	uploader.DiscountCoupenUpload.array("img", 2),
	discountCoupens.addDiscountCoupensItem
);
router.delete(
	"/delete-discount-item/:id",
	discountCoupens.deleteDiscountCoupensItem
);

//Free Gift Vouchers
router.get(
	"/get-free-gift-voucher-items",
	freeGiftVoucher.getFreeGiftVoucherItems
);
router.get(
	"/get-single-gift-voucher-item/:id",
	freeGiftVoucher.getSingleGiftVoucherItems
);
router.put(
	"/update-free-gift-voucher-item/:id",
	uploader.FreeGiftUpload.array("img", 2),
	freeGiftVoucher.updateFreeGiftVoucherItem
);
router.post(
	"/add-free-gift-voucher-items",
	uploader.FreeGiftUpload.array("img", 2),
	freeGiftVoucher.addFreeGiftVoucherItems
);
router.delete(
	"/delete-free-gift-voucher-item/:id",
	freeGiftVoucher.deleteFreeGiftVoucherItem
);

//Our Client
router.get("/get-our-clients-items", ourClient.getOurClientsItems);
router.get("/get-single-our-client/:id", ourClient.getSingleOurClientsItems);
router.put(
	"/update-our-clients-item/:id",
	uploader.OurclientUpload.array("img", 2),
	ourClient.updateOurClientsItem
);
router.post(
	"/add-our-clients-items",
	uploader.OurclientUpload.array("img", 2),
	ourClient.addOurClientsItems
);
router.delete("/delete-our-clients-item/:id", ourClient.deleteOurClientsItem);

//trending offer
router.get("/get-trending-offer-items", trendingOffer.getTrendingOffersItems);
router.get(
	"/get-single-trending-offer/:id",
	trendingOffer.getSingleTrendingOffersItem
);
router.put(
	"/update-trending-offer-item/:id",
	uploader.TrendingOffersUpload.array("img", 2),
	trendingOffer.updateTrendingOffersItem
);
router.post(
	"/add-trending-offer-items",
	uploader.TrendingOffersUpload.array("img", 2),
	trendingOffer.addTrendingOffersItem
);
router.delete(
	"/delete-trending-offer-item/:id",
	trendingOffer.deleteTrendingOffersItem
);
//trending offer
router.get("/get-trending-offer-items", trendingOffer.getTrendingOffersItems);
router.put(
	"/update-trending-offer-item/:id",
	uploader.TrendingOffersUpload.array("img", 2),
	trendingOffer.updateTrendingOffersItem
);
router.post(
	"/add-trending-offer-items",
	uploader.TrendingOffersUpload.array("img", 2),
	trendingOffer.addTrendingOffersItem
);
router.delete(
	"/delete-trending-offer-item/:id",
	trendingOffer.deleteTrendingOffersItem
);

//client testimonials
router.get(
	"/get-client-testimonial-items",
	clientTestimonial.getClientTestimonialsItems
);
router.get(
	"/get-single-client-testimonial-items/:id",
	clientTestimonial.getSingleClientTestimonialsItem
);
router.put(
	"/update-client-testimonial-item/:id",
	uploader.ClientTestimonialImages.array("img", 2),
	clientTestimonial.updateClientTestimonialsItem
);
router.post(
	"/add-client-testimonial-items",
	uploader.ClientTestimonialImages.array("img", 2),
	clientTestimonial.addClientTestimonialsItem
);
router.delete(
	"/delete-client-testimonial-item/:id",
	clientTestimonial.deleteClientTestimonialsItem
);
router.put(
	"/approve-client-testimonial/:id",
	clientTestimonial.approveClientTestimonialsItem
);

//testimonials
router.get("/get-testimonial-items", testimonial.getTestimonialItems);
router.get(
	"/get-single-testimonial-items/:id",
	testimonial.getSingleTestimonialItem
);

router.post(
	"/add-testimonial-items",
	uploader.TestimonialImages.array("img", 2),
	testimonial.addTestimonialItem
);
router.delete(
	"/delete-testimonial-item/:id",
	testimonial.deleteTestimonialItem
);
router.put(
	"/update-testimonial-item/:id",
	uploader.TestimonialImages.array("img", 2),
	testimonial.updateTestimonialItem
);

//Raining
router.get("/get-raining-items", raining.getRainingItems);
router.get("/get-single-raining-items/:id", raining.getSingleRainingItem);

router.post(
	"/add-raining-items",
	uploader.RainingImages.array("img", 2),
	raining.addRainingItem
);
router.delete("/delete-raining-item/:id", raining.deleteRainingItem);
router.put(
	"/update-raining-item/:id",
	uploader.RainingImages.array("img", 2),
	raining.updateRainingItem
);

//Happy Clients
router.get("/get-happyClients-items", happyClients.getHappyClientsItems);
router.get(
	"/get-single-happyClients-items/:id",
	uploader.RainingImages.array("img", 2),
	happyClients.getSingleHappyClientsItem
);

router.post(
	"/add-happyClients-items",
	uploader.HappyCllientsImages.array("img", 2),
	happyClients.addHappyClientsItem
);
router.delete(
	"/delete-happyClients-item/:id",
	happyClients.deleteHappyClientsItem
);
router.put(
	"/update-happyClients-item/:id",
	uploader.HappyCllientsImages.array("img", 2),
	happyClients.updateHappyClientsItem
);

module.exports = router;
