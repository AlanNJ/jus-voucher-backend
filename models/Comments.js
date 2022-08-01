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
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{ timestamps: true }
	);
	return Comment;
};
