export const calcularCilindro = ({ volume, pressao, fluxo }) => {
  const tempoO2 = (volume * pressao) / fluxo;
  return tempoO2;
};
