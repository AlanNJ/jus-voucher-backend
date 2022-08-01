module.exports = (sequelize, DataTypes) => {
	const Banner = sequelize.define(
		"Banner",
		{
			img: {
				type: DataTypes.STRING,
			},
			info: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
	return Banner;
};
