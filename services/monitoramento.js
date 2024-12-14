import { consumoGases } from "../data/consumoGases.js";

export const monitoramentoGases = ({
  tipoGas,
  local,
  duracaoMinutos,
  consumoLitros,
}) => {
  const gasData = consumoGases.find((g) => g.gas === tipoGas.toLowerCase());
  if (!gasData) {
    return "Atenção: Gás não encontrado no banco de dados.";
  }

  const localGas = gasData.locais.find((l) => l.local === local.toLowerCase());
  if (!localGas) {
    return "Local não encontrado no banco de dados.";
  }
  console.log("Consumo:", duracaoMinutos);
  const consumoPadrao = localGas.consumo * duracaoMinutos;
  if (consumoLitros > consumoPadrao) {
    return `Atenção: Consumo Excede o padrão em ${
      consumoLitros - consumoPadrao
    } litros. | (Local: ${localGas.local.toUpperCase()} - Consumo Padrão: ${
      localGas.consumo
    } L / min)`;
  }
  return `Consumo Normal (${consumoLitros}L / ${duracaoMinutos}min) | (Local: ${localGas.local.toUpperCase()} - Consumo Padrão: ${
    localGas.consumo
  } L / min)`;
};
