function mostrarEndereco() {
    document.querySelectorAll('.endereco').forEach(div => div.style.display = 'none');
    let tipo = document.getElementById("tipoResidencia").value;
    if (tipo === "casa") document.getElementById("enderecoCasa").style.display = "block";
    else if (tipo === "apartamento") document.getElementById("enderecoApartamento").style.display = "block";
}

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    let inputs = document.querySelectorAll("input[required]");
    let valido = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = "red";
            valido = false;
        } else {
            input.style.borderColor = "#ccc";
        }
    });

    if (!valido) {
        event.preventDefault();
        alert("Preencha todos os campos obrigatórios!");
    }
});
