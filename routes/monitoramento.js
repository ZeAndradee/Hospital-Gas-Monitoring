import express from "express";
import { monitoramentoController } from "../controllers/monitoramento.js";

const router = express.Router();

router.post("/monitoramento", monitoramentoController);

export default router;
