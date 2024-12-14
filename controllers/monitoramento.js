import { monitoramentoGases } from "../services/monitoramento.js";

export const monitoramentoController = (req, res) => {
  const tipoGas = req.body.tipoGas;
  const local = req.body.local;
  const duracaoMinutos = req.body.duracaoMinutos;
  const consumoLitros = req.body.consumoLitros;

  try {
    const resultado = monitoramentoGases({
      tipoGas: tipoGas,
      local: local,
      duracaoMinutos: duracaoMinutos,
      consumoLitros: consumoLitros,
    });

    res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
