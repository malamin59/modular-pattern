import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
// import verify from "../../middleware/verify";

const router = Router();

router.post("/", userController.createUser);
router.get("/", auth(), userController.getAllUser);

export const userRoute = router;
