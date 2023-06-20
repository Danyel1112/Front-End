// Capturando o formulário de login
var formLogin = document.querySelector('form');

// Adicionando um evento de submissão
formLogin.addEventListener('submit', function(event) {
  // Impedindo a submissão do formulário se algum campo estiver vazio
  if (!formLogin.username.value || !formLogin.password.value) {
    event.preventDefault();
    alert('Por favor, preencha todos os campos!');
  }
});