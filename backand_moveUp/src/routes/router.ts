import { Router } from "express";
import { createUser } from "../controllers/user-controller";
import { loginController } from "../controllers/auth/auth-controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

// router.post('/rota', ensureAuthenticated, controller)
router.post('/user', createUser)
router.post("/login", loginController);

export default router;