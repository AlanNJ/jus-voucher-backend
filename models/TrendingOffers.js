module.exports = (sequelize, DataTypes) => {
	const TrendingOffer = sequelize.define(
		"TrendingOffer",
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
	return TrendingOffer;
};
