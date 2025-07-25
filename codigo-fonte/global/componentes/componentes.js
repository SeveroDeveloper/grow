async function carregaComponente(caminhoHTML, id, caminhoJS) {
  // Carrega o HTML
  const res = await fetch(caminhoHTML);
  const html = await res.text();

  // Injeta o HTML na página
  document.getElementById(id).innerHTML = html;

  // Cria e carrega o script
  const script = document.createElement('script');
  script.src = caminhoJS;
  document.body.appendChild(script);
}

// -- popups --

const botaoAbrir = document.getElementById('abrir-popup');

// só segue quando existe na página botão de abrir popup
if (botaoAbrir) { 
  const botaoFechar = document.getElementById('fechar-popup');
  const popup = document.getElementById('popup');

  botaoAbrir.addEventListener('click', () => {
    popup.classList.remove('oculta');
  });
  
  botaoFechar.addEventListener('click', () => {
    popup.classList.add('oculta');
  });
  
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.add('oculta');
    }
  });
}

// -- toasts --

function mostraToast() {
  const toast = document.getElementById('toast');
  
  toast.classList.remove('oculta');
  toast.classList.add('ativa');
  
  // Esconde o toast depois de 3 segundos
  setTimeout(() => {
    toast.classList.remove('ativa');
    setTimeout(() => {
      toast.classList.add('oculta');
    }, 500); // espera a transição acabar
  }, 3000);
}

// Função para adicionar favicon a todas as páginas
function adicionarFavicon() {
  // Verifica se já existe um favicon
  if (!document.querySelector("link[rel='icon']")) {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/ico';
    favicon.href = '../global/imagens/favicon.ico'; 
    document.head.appendChild(favicon);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  adicionarFavicon();
});