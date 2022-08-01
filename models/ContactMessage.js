module.exports = (sequelize, DataTypes) => {
	const ContactMessage = sequelize.define(
		"ContactMessage",
		{
			first_name: {
				type: DataTypes.TEXT,
			},
			last_name: {
				type: DataTypes.STRING,
			},
			phone: {
				type: DataTypes.STRING,
			},
			email: {
				type: DataTypes.STRING,
			},
			message: {
				type: DataTypes.TEXT,
			},
		},
		{ timestamps: false }
	);
	return ContactMessage;
};
