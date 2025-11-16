import { formatarMoeda, formatString  } from './formatting.js'; // (Você já tinha esta)

//Recebe os dados e o container
export function exibirDados(dados, container) {
  container.innerHTML = ''; // Limpa a lista

  Object.entries(dados).forEach(([nomeMoeda, valor]) => {
    // Percorre cada par [nomeDaMoeda, dadosDaMoeda] no objeto
    container.innerHTML += `
        <div class="crypto-item">
          <p class="crypto-name">${nomeMoeda}</p>
          <p class="crypto-price">${formatarMoeda(valor.brl)}</p>
        </div>      
        `;
  });
}

// filtra a lista
export function filtrarLista(termo) {
//Pegar o item todo
  const criptoItems = document.querySelectorAll('.crypto-item');

  criptoItems.forEach((item) => {
    const nome = item.querySelector('.crypto-name').textContent;

    if (formatString(nome).indexOf(termo) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
