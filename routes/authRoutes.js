const userController = require("../controllers/userController");
const router = require("express").Router();
const messageController = require("../controllers/contactMessages");

router.post("/add-user", userController.addUser);
router.get("/get-all-user", userController.getAllUser);
router.get("/get-single-user/:id", userController.getSingleUser);
router.delete("/delete-user/:id", userController.deleteUser);

//contact messages

router.get("/get-all-messages", messageController.getAllMessages);
router.post("/send-message", messageController.sendMessage);

router.get("/get-all-quotes", userController.getAllQuotes);
router.post("/add-quote", userController.addQuotes);
router.put("/approve-admin/:id", userController.approveAdmin);
module.exports = router;
