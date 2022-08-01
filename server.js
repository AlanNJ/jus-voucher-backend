const express = require("express");
const cors = require("cors");
var path = require("path");

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "*",
	})
);
app.get("/", (req, res) => {
	res.json("hello");
});
app.use("/api/auth/", require("./routes/authRoutes"));
app.use("/api/products/", require("./routes/products"));
app.use("/api/blogs/", require("./routes/blogRoutes"));

app.use(express.static(path.join(__dirname, "public")));
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/.next"));
}
app.listen(5000, () => {
	console.log("server running on port 5000");
});
