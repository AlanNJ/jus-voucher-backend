module.exports = (sequelize, DataTypes) => {
	const TEstimonials = sequelize.define(
		"Testimonials",
		{
			name: {
				type: DataTypes.STRING,
			},
			designation: {
				type: DataTypes.STRING,
			},
			testimonial: {
				type: DataTypes.TEXT,
			},
		},
		{ timestamps: false }
	);
	return TEstimonials;
};
