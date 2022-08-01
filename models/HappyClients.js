module.exports = (sequelize, DataTypes) => {
	const HappyClients = sequelize.define(
		"HappyClients",
		{
			img: {
				type: DataTypes.STRING,
			},
			name: {
				type: DataTypes.STRING,
			},
			message: {
				type: DataTypes.TEXT,
			},
		},
		{ timestamps: false }
	);
	return HappyClients;
};
