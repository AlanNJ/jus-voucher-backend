module.exports = (sequelize, DataTypes) => {
	const DiscountCoupen = sequelize.define(
		"DiscountCoupen",
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
	return DiscountCoupen;
};
