const fs = require("fs");
const DeleteFile = async (filePath) => {
	if (fs.existsSync(filePath)) {
		fs.unlinkSync(filePath);
	}
};
module.exports = DeleteFile;
