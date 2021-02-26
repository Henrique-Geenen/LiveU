var enviar = document.querySelector("#enviar");

enviar.addEventListener("click", function() {

    event.preventDefault();

    var nome = document.querySelector("#nome").value;
    var sobrenome = document.querySelector("#sobrenome").value;
    var email = document.querySelector("#email").value;

    var user =  {
        nome: nome,
        sobrenome: sobrenome,
        email: email
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
            var codNome = codigos[1]
            var codSobrenome = codigos[3]
            var codEmail = codigos[5]
            
            console.log(codNome)
            console.log(codSobrenome)
            console.log(codEmail)

        },
        fail: function(jqXHR, textStatus) {
            console.log("fail")
            alert("Request failed: " + textStatus);
        }
    });
});
