// Seleciona o botão de busca
const btn = document.querySelector('.btn_search');

btn.addEventListener('click', () => {
  // Chama a função de busca
  search();
});

function search() {
  // Seleciona a seção onde serão exibidos os resultados
  let section = document.getElementById('search_results');

  // Pega o valor do campo de busca (convertido para minúsculo)
  let field = document.getElementById('field_search').value.toLowerCase();

  // Variáveis para armazenar resultados
  let result = '';
  let namePlayer = '';
  let positionPlayer = '';

  // Verifica se o campo de busca está vazio
  if (!field) {
    // Exibe mensagem se nenhum termo de busca foi digitado
    section.innerHTML = '<p>Nenhum jogador encontrado.</p>';
  } else {
    // Itera sobre a lista de jogadores (assumindo que a variável `players` existe)
    for (let player of players) {
      // Converte o nome e a posição do jogador para minúsculo para comparação
      namePlayer = player.name.toLowerCase();
      positionPlayer = player.position.toLowerCase();

      // Verifica se o termo de busca está presente no nome ou na posição do jogador
      if (namePlayer.includes(field) || positionPlayer.includes(field)) {
        // Constrói o HTML do card de resultado do jogador
        result += `
          <article class="card">
            <header class="card_header">
              <img src="${player.image}" alt="${player.name}">
            </header>
            <footer class="card_footer">
              <span>${player.number}</span>
              <h3>${player.name}</h3> 
              <p>${player.position}</p>
            </footer>
          </article>
        `;
      }
    }

    // Verifica se nenhum resultado foi encontrado
    if (!result) {
      // Exibe mensagem se nenhum jogador corresponde ao termo de busca
      result = "<p>Jogador não encontrado.</p>";
    }
  }

  // Atualiza o conteúdo da seção de resultados com o HTML construído
  section.innerHTML = result;

  clear();
}

// Função para limpar o campo de busca
function clear() {
  document.getElementById('field_search').value = '';
}