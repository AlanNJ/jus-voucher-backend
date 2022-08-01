module.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define(
		"Comment",
		{
			comment: {
				type: DataTypes.TEXT,
			},
			name: {
				type: DataTypes.STRING,
			},
			approved: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
		},
		{ timestamps: true }
	);
	return Comment;
};
