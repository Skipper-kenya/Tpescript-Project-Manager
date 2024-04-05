const { Router } = require("express");
const createController = require("../controller/create");
const updateController = require("../controller/update");
const deleteController = require("../controller/delete");
const readController = require("../controller/read");

const router = Router();

router.get("/", readController);
router.post("/", createController);
router.put("/", updateController);
router.delete("/", deleteController);

const crudRouter = router;
module.exports = crudRouter;
