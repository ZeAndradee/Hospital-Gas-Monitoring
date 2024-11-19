export const calcularValorGas = ({
  tipoGas,
  qtdUtilizadaLitros,
  minutos,
  precoM3,
}) => {
  // Verifica o tipo de gás
  if (tipoGas === "oxigenio") {
    // Convertendo o preço por m³ para preço por litro
    const precoPorLitro = precoM3 / 1000;

    // Cálculo do valor total com base na quantidade utilizada em litros
    const valorTotal = qtdUtilizadaLitros * precoPorLitro * minutos;

    return `Valor do Gás ${tipoGas} (Litros / Minutos): R$ ${valorTotal.toPrecision(
      2
    )}`;
  }

  return 0; // Retorna 0 se o gás não for encontrado ou não for tratado
};
