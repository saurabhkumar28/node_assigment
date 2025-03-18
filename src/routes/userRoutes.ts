import express from "express";
import { loadUsers } from "../controllers/userController";

const router = express.Router();

router.get('/load', loadUsers);

export default router;
