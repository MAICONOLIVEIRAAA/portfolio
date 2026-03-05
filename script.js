function toggleDarkMode() {
  // Alterna a classe 'dark-mode' no corpo do site
  document.body.classList.toggle('dark-mode');
  
  // Muda o texto do botão dependendo do modo ativo
  const button = document.getElementById('theme-toggle');
  if (document.body.classList.contains('dark-mode')) {
    button.textContent = '☀️ Modo Claro';
  } else {
    button.textContent = '🌙 Modo Escuro';
  }
}
