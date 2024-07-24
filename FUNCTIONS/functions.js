function verificar(){
    var nome = document.getElementById("USER").value
    var senha = document.getElementById("SENHA").value

    var nomeLogin = "ANTONY"
    var senhaLogin = "12345"

    if (nome != nomeLogin){
        if (senha != senhaLogin){
            alert("Usuario e senha invalidos")
        }else{
            alert("Usuario invalido")
        }
    }else{
        location.href="../PAGES/HOME.html";
    }

    
}