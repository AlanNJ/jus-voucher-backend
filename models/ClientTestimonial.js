module.exports = (sequelize, DataTypes) => {
	const ClientTestimonial = sequelize.define(
		"ClientTestimonial",
		{
			img: {
				type: DataTypes.STRING,
			},
			message: {
				type: DataTypes.TEXT,
			},
			email: {
				type: DataTypes.STRING,
			},
			approved: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			role: {
				type: DataTypes.STRING,
			},
			name: {
				type: DataTypes.STRING,
			},
		},
		{ timestamps: false }
	);
	return ClientTestimonial;
};
