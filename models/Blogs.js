module.exports = (sequelize, DataTypes) => {
	const Blogs = sequelize.define(
		"Blogs",
		{
			title: {
				type: DataTypes.TEXT,
			},
			description: {
				type: DataTypes.TEXT,
			},
			information: {
				type: DataTypes.TEXT,
			},
			blog_image: {
				type: DataTypes.TEXT,
			},
			likes: {
				type: DataTypes.INTEGER,
			},
		},
		{ timestamps: false }
	);
	return Blogs;
};
