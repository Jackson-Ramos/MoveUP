import { Router } from "express";
import { createUser, findAllStudentController } from "../controllers/user-controller";
import { loginController } from "../controllers/auth/auth-controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const router = Router();

// router.post('/rota', ensureAuthenticated, controller)
router.post('/user', createUser)
router.post("/login", loginController);
router.get('/user', ensureAuthenticated, findAllStudentController)

export default router;