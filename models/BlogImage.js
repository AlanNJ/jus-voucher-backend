module.exports = (sequelize, DataTypes) => {
	const BlogImage = sequelize.define(
		"BlogImage",
		{
			img: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
	return BlogImage;
};
