module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			email: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
			},
			approved: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
		},
		{
			timestamps: false,
		}
	);
	return User;
};
