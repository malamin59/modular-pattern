import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
// import verify from "../../middleware/verify";

const router = Router();

router.post("/", userController.createUser);
router.get("/", auth("admin"), userController.getAllUser);
router.get("/singleUser",   userController.getSingleUser);

export const userRoute = router;
