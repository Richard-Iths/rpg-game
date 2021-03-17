const { Router } = require("express");
const rootController = require("../controllers/rootController");

const router = Router();

router.get("/", rootController.getRootPage);

module.exports = router;
