import { calcularCilindro } from "../services/calcularCilindro.js";

export const calcularCilindroController = (req, res) => {
  const { volume, pressao, fluxo } = req.body;

  try {
    const tempoO2 = calcularCilindro({
      volume: volume,
      pressao: pressao,
      fluxo: fluxo,
    });
    res.status(200).json(`Tempo de O2: ${tempoO2} minutos`);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
};
