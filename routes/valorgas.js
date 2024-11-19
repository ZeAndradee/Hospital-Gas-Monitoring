import express from "express";
import { valorGasController } from "../controllers/valorgas.js";

const router = express.Router();

router.post("/valorgas", valorGasController);

export default router;
