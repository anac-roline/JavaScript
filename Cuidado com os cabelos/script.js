// Lista de dicas sobre cuidados com o cabelo
const dicas = [
    "Evite usar água muito quente ao lavar os cabelos.",
    "Corte as pontas regularmente para evitar pontas duplas.",
    "Use protetor térmico antes de usar secador ou chapinha.",
    "Massageie o couro cabeludo para estimular o crescimento.",
    "Evite lavar o cabelo todos os dias para não ressecar."
  ];
  
  // Função para mostrar uma dica aleatória quando o botão for clicado
  function mostrarNovaDica() {
    // Pega uma dica aleatória da lista
    const dica = dicas[Math.floor(Math.random() * dicas.length)];
  
    // Atualiza o conteúdo da <div id="dicaAtual">
    document.getElementById("dicaAtual").textContent = dica;
  }