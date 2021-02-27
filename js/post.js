var enviar = document.querySelector("#enviar");
var xhttp = new XMLHttpRequest();

enviar.addEventListener("click", function() {
    event.preventDefault();

    localStorage.nome = document.querySelector("#nome").value;
    localStorage.sobrenome = document.querySelector("#sobrenome").value;
    localStorage.email = document.querySelector("#email").value;

    // document.getElementById('nomeRes').innerHTML = localStorage.nome
    // document.getElementById('sobrenomeRes').innerHTML = localStorage.sobrenome
    // document.getElementById('emailRes').innerHTML = localStorage.email

    var user =  {
        nome: localStorage.nome,
        sobrenome: localStorage.sobrenome,
        email: localStorage.email
    };

    console.log(user);

    $.ajax({
        method: "POST",
        url: "http://138.68.29.250:8082/",
        data: user,
        contentType: "application/x-www-form-urlencoded",
        success: function(data) {

            console.log(data)

            var codigos = data.split("#")
            localStorage.codNome = codigos[1]
            localStorage.codSobrenome = codigos[3]
            localStorage.codEmail = codigos[5]
            
            console.log(localStorage.codNome)
            console.log(localStorage.codSobrenome)
            console.log(localStorage.codEmail)

        },
        fail: function(jqXHR, textStatus) {
            console.log("fail")
            alert("Request failed: " + textStatus);
        },
    });
    // document.getElementById("form-res").submit();
});
