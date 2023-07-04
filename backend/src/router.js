const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const racesControllers = require("./controllers/racesControllers");

router.get("/races", racesControllers.browse);
router.get("/races/:id", racesControllers.read);
router.put("/races/:id", racesControllers.edit);
router.post("/races", racesControllers.add);
router.delete("/races/:id", racesControllers.destroy);

const caracteresControllers = require("./controllers/caracteresControllers");

router.get("/caracteres", caracteresControllers.browse);
router.get("/caracteres/:id", caracteresControllers.read);
router.put("/caracteres/:id", caracteresControllers.edit);
router.post("/caracteres", caracteresControllers.add);
router.delete("/caracteres/:id", caracteresControllers.destroy);

module.exports = router;
