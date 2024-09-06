function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do jogador ou esporte!</p>"
    return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()


  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    // Se titulo includess campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    // Constrói o HTML para cada item do resultado da pesquisa,
    // utilizando template literals para formatar a string
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href=${dado.link} target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
    }
    
    
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
