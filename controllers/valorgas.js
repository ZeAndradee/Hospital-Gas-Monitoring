import { calcularValorGas } from "../services/valorGas.js";

export const valorGasController = (req, res) => {
  const tipoGas = req.body.tipoGas;
  const qtdUtilizadaLitros = req.body.qtdUtilizadaLitros;
  const minutos = req.body.minutos;
  const precoM3 = req.body.precoLitro;
  try {
    const valorGas = calcularValorGas({
      tipoGas: tipoGas,
      qtdUtilizadaLitros: qtdUtilizadaLitros,
      minutos: minutos,
      precoM3: precoM3,
    });
    res.status(200).json(valorGas);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
