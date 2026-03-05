function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  
  const button = document.getElementById('theme-toggle');
  
  if (document.body.classList.contains('dark-mode')) {
    button.textContent = '☀️ Modo Claro';
  } else {
    button.textContent = '🌙 Modo Escuro';
  }
}
