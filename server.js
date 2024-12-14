import express from "express";
import valorGas from "./routes/valorgas.js";
import monitoramento from "./routes/monitoramento.js";
import calcularCilindro from "./routes/calculoCilindro.js";

const app = express();

app.use(express.json());

app.use("/", valorGas);
app.use("/", monitoramento);
app.use("/", calcularCilindro);

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err);
    return;
  }
  console.log(`Server is running on port ${PORT}`);
});
