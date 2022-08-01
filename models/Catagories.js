module.exports = (sequelize, DataTypes) => {
	const Catagories = sequelize.define(
		"Catagories",
		{
			crousel_name: {
				type: DataTypes.STRING,
			},
			images: {
				type: DataTypes.STRING,
				get: function () {
					return JSON.parse(this.getDataValue("images"));
				},
				set: function (val) {
					return this.setDataValue("images", JSON.stringify(val));
				},
			},
		},
		{ timestamps: false }
	);
	return Catagories;
};
