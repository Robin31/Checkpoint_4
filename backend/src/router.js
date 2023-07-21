const express = require("express");

const router = express.Router();

const racesControllers = require("./controllers/racesControllers");
const profilsControllers = require("./controllers/profilsControllers");
const authControllers = require("./controllers/authControllers");
const chiensControllers = require("./controllers/chiensControllers");
const caracteresControllers = require("./controllers/caracteresControllers");
const faqsControllers = require("./controllers/faqsControllers");
const sexesControllers = require("./controllers/sexesControllers");
const videosControllers = require("./controllers/videosControllers");
const usersControllers = require("./controllers/usersControllers");
const benevolesControllers = require("./controllers/benevolesControllers");

const { hashPassword } = require("./services/auth");
const { checkUserData, checkUpdateData } = require("./services/checkData");
const { checkUser } = require("./services/jwt");

router.post("/signin", checkUserData, authControllers.signin);
router.post("/signup", checkUserData, hashPassword, authControllers.signup);

router.get("/races", racesControllers.browse);
router.get("/races/:id", racesControllers.read);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);

router.get("/sexes", sexesControllers.browse);
router.get("/sexes/:id", sexesControllers.read);

router.get("/caracteres", caracteresControllers.browse);
router.get("/caracteres/:id", caracteresControllers.read);

router.get("/chiens", chiensControllers.browse);
router.get("/chiens/:id", chiensControllers.read);

router.get("/videos", videosControllers.browse);
router.get("/videos/:id", videosControllers.read);

router.get("/profils/:id", profilsControllers.read);
router.get("/profils", checkUpdateData, profilsControllers.browse);
router.put("/profils/:id", profilsControllers.edit);

router.get("/faqs", faqsControllers.browse);
router.get("/faqs/:id", faqsControllers.read);

router.post("/benevoles", benevolesControllers.add);

router.use(checkUser);
router.put("/races/:id", racesControllers.edit);
router.post("/races", racesControllers.add);
router.delete("/races/:id", racesControllers.destroy);

router.put("/caracteres/:id", caracteresControllers.edit);
router.post("/caracteres", caracteresControllers.add);
router.delete("/caracteres/:id", caracteresControllers.destroy);

router.put("/chiens/:id", chiensControllers.edit);
router.post("/chiens", chiensControllers.add);
router.delete("/chiens/:id", chiensControllers.destroy);

router.put("/faqs/:id", faqsControllers.edit);
router.post("/faqs", faqsControllers.add);
router.delete("/faqs/:id", faqsControllers.destroy);

router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);

router.get("/benevoles", benevolesControllers.browse);
router.get("/benevoles/:id", benevolesControllers.read);
router.delete("/benevoles/:id", benevolesControllers.destroy);

// router.get("/admin/profils/:id", profilsControllers.getUserinfo);
// router.put("/profils/update", profilsControllers.editUserbyId);
// router.put("/admin/update/:id", profilsControllers.AdmineditUserbyId);

module.exports = router;
