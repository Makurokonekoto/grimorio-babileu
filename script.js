const magias = [
  {
    nome: "Seta Infalível de Talude",
    tipo: "Arcana",
    circulo: "1",
    escola: "Evocação",
    execucao: "Padrão",
    alcance: "Médio",
    descricao: "Duas setas de energia mágica voam da ponta de seus dedos e atingem o alvo automaticamente, causando 1d4+1 pontos de dano de essência cada."
  },
  {
    nome: "Curar Ferimentos",
    tipo: "Divina",
    circulo: "1",
    escola: "Evocação",
    execucao: "Padrão",
    alcance: "Toque",
    descricao: "Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada."
  },
  {
    nome: "Armadura Arcana",
    tipo: "Arcana",
    circulo: "1",
    escola: "Abjuração",
    execucao: "Padrão",
    alcance: "Pessoal",
    descricao: "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa."
  },
  {
    nome: "Bola de Fogo",
    tipo: "Arcana",
    circulo: "2",
    escola: "Evocação",
    execucao: "Padrão",
    alcance: "Médio",
    descricao: "Uma explosão flamejante causa 6d6 pontos de dano de fogo em todas as criaturas e objetos livres em uma esfera de 6m de raio."
  },
  {
    nome: "Velocidade",
    tipo: "Arcana",
    circulo: "2",
    escola: "Transmutação",
    execucao: "Padrão",
    alcance: "Curto",
    descricao: "Você acelera a mente e o corpo do alvo, concedendo uma ação padrão ou de movimento adicional por turno."
  },
  {
    nome: "Coluna de Chamas",
    tipo: "Divina",
    circulo: "3",
    escola: "Evocação",
    execucao: "Padrão",
    alcance: "Médio",
    descricao: "Um cilindro de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz."
  }
];

const containerMagias = document.getElementById("lista-magias");
const campoBusca = document.getElementById("campo-busca");
const filtroCirculo = document.getElementById("filtro-circulo");
const filtroTipo = document.getElementById("filtro-tipo");

function renderizarMagias(lista) {
  containerMagias.innerHTML = "";

  if (lista.length === 0) {
    containerMagias.innerHTML = "<p>Nenhuma magia encontrada nos registros de Arton.</p>";
    return;
  }

  lista.forEach((magia) => {
    const card = document.createElement("article");
    card.classList.add("card-magia");

    card.innerHTML = `
      <h2>${magia.nome}</h2>
      <div class="tags">
        <span class="tag">${magia.tipo} ${magia.circulo}º Círculo</span>
        <span class="tag">${magia.escola}</span>
      </div>
      <p class="detalhes"><strong>Execução:</strong> ${magia.execucao} | <strong>Alcance:</strong> ${magia.alcance}</p>
      <p class="descricao">${magia.descricao}</p>
    `;

    containerMagias.appendChild(card);
  });
}

function filtrarMagias() {
  const termo = campoBusca.value.toLowerCase();
  const circulo = filtroCirculo.value;
  const tipo = filtroTipo.value;

  const filtradas = magias.filter((magia) => {
    const bateNome = magia.nome.toLowerCase().includes(termo);
    const bateCirculo = circulo === "todos" || magia.circulo === circulo;
    const bateTipo = tipo === "todos" || magia.tipo === tipo;
    return bateNome && bateCirculo && bateTipo;
  });

  renderizarMagias(filtradas);
}

campoBusca.addEventListener("input", filtrarMagias);
filtroCirculo.addEventListener("change", filtrarMagias);
filtroTipo.addEventListener("change", filtrarMagias);

// Inicializa a tela com todas as magias
renderizarMagias(magias);