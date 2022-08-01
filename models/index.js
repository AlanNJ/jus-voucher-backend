const dbConfig = require("../config/dbconfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
});
sequelize
	.authenticate()
	.then(() => console.log("Database Connected Successfully !!"))
	.catch((err) => console.log(err + "err occoured"));

const db = {};
(db.Sequelize = Sequelize), (db.sequelize = sequelize);
db.user = require("./User")(sequelize, DataTypes);
db.banner = require("./Banner")(sequelize, DataTypes);
db.discountCoupen = require("./DiscountCoupens")(sequelize, DataTypes);
db.freeGiftVoucher = require("./FreeGiftvouchers")(sequelize, DataTypes);
db.ourClient = require("./OurClients")(sequelize, DataTypes);
db.trendingOffer = require("./TrendingOffers")(sequelize, DataTypes);
db.clientTestimonial = require("./ClientTestimonial")(sequelize, DataTypes);
db.comment = require("./Comments")(sequelize, DataTypes);
db.blog = require("./Blogs")(sequelize, DataTypes);
db.contactMessage = require("./ContactMessage")(sequelize, DataTypes);
db.testimonial = require("./Testimonials")(sequelize, DataTypes);
db.blogImage = require("./BlogImage")(sequelize, DataTypes);
db.raining = require("./RainingDiscounts")(sequelize, DataTypes);
db.happyClients = require("./HappyClients")(sequelize, DataTypes);

db.blog.hasMany(db.comment, {
	foreignKey: "blog_id",
	as: "Comment",
});
db.comment.belongsTo(db.blog, {
	foreignKey: "blog_id",
	as: "Blog",
});
db.sequelize.sync({ force: false }).then(() => console.log("sync is done"));
module.exports = db;
