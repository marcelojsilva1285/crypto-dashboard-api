import { buscarPreco } from './app.js';
import { formatString } from './formatting.js';
import {exibirDados, filtrarLista} from './ui.js'

const inputFilter = document.getElementById('filter-input');
const cryptoContainer = document.getElementById('crypto-list')

async function atualizarDados() {
  const dados = await buscarPreco();

  exibirDados(dados, cryptoContainer);
}


document.getElementById('update-button').addEventListener('click', () => {
  atualizarDados();
});

async function carregar() {
  const dados = await buscarPreco()
  exibirDados(dados, cryptoContainer)
}

carregar()


inputFilter.addEventListener('input', (e) => {
  const inputValue = formatString(e.target.value);
 
  filtrarLista(inputValue)

});
