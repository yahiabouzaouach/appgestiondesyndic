const express=require('express');
const router = express.Router();
const fraisController= require("../controllers/fraisContoller");
const tokenHandlerMiddleware = require("../middleware/tokkenHandler");

router.get("/",fraisController.getAllfrais);
router.get("/frais/:id",fraisController.getfrais);


router.post("/Frais/edit/:idfrais",fraisController.updateFrais);
router.get("/createfrais",tokenHandlerMiddleware(),fraisController.showCreatefrais);
router.post("/createfrais", tokenHandlerMiddleware(),fraisController.createfrais);
router.get ("/deletefrais/:id",tokenHandlerMiddleware(),fraisController.deleteFrais);



module.exports = router;