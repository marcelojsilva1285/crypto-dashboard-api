export function formatarMoeda(valor) {
  const formatadorReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const valorFormatado = formatadorReal.format(valor);

  return valorFormatado;
}

export function formatString(text) {
  return text
    .toLowerCase()    
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
