function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let result = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    // Constrói o HTML para cada item do resultado da pesquisa,
    // utilizando template literals para formatar a string
    result += `
      <div class="item-resultado">
        <h2>
          <a href=${dado.link} target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = result;
}