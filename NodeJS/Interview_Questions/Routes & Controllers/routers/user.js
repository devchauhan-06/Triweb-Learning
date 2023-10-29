const { getUser, putUser, postUser } = require("../controllers/user");
const express = require("express");

const router = express.Router();

router.get("/", getUser);
router.post("/", postUser);
router.put("/", putUser);

module.exports = router;