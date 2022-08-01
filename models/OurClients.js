module.exports = (sequelize, DataTypes) => {
	const OurClients = sequelize.define(
		"OurClients",
		{
			img: {
				type: DataTypes.STRING,
			},
			name: {
				type: DataTypes.STRING,
			},
			role: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
	return OurClients;
};
