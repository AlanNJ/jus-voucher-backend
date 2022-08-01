module.exports = (sequelize, DataTypes) => {
	const RainingDiscount = sequelize.define(
		"RainingDiscount",
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
	return RainingDiscount;
};
