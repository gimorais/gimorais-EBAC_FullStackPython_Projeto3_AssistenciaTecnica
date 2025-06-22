$(document).ready(function() {
  // Aplica a máscara assim que a página carregar
    $('#telefone').mask('(00) 00000-0000');

  // Evento submit do formulário
    $("form").on("submit", function(event) {
    // Validação do serviço selecionado
    const servico = $("#form-servico").val();
    if (!servico) {
        alert("Por favor, selecione um tipo de serviço.");
        event.preventDefault();
        $("#form-servico").focus();
        return false;
    }

    // Validação do nome completo
    const nome = $("#nome").val().trim();
    const nomeParts = nome.split(" ");
    if (nomeParts.length < 2) {
        alert("Por favor, digite seu nome completo (nome e sobrenome).");
        event.preventDefault();
        $("#nome").focus();
        return false;
    }

    });
});