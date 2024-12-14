import express from "express";
import { calcularCilindroController } from "../controllers/calcularCilindro.js";

const router = express.Router();

router.post("/calcularCilindro", calcularCilindroController);

export default router;
