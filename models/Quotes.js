module.exports = (sequelize, DataTypes) => {
	const Quotes = sequelize.define(
		"Quotes",
		{
			email: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
	return Quotes;
};
