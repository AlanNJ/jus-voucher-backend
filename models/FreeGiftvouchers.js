module.exports = (sequelize, DataTypes) => {
	const FreeGiftVoucher = sequelize.define(
		"FreeGiftVoucher",
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
	return FreeGiftVoucher;
};
