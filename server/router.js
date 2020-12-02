const router = require("express").Router();
const userController = require("./controllers/userController");
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) =>
  res.json("Hello, if you see this message that means your backend is up and running successfully.")
);

router.post("/login", userController.login);

module.exports = router;
