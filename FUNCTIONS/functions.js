function verificar(){
    var nome = document.getElementById("USER").value
    var senha = document.getElementById("SENHA").value

    var nomeLogin = "ANTONY"
    var senhaLogin = "12345"
    if (nome == nomeLogin){
        var passNome = true
    }
    if (senha == senhaLogin){
        var passSenha = true
    }
    
    if (!passNome && !passSenha){
        alert("Usuário e senha inválidos.")

    }else if (passnome && !passSenha){
        alert("Senha inválida")

    }else if(!passNome && passSenha){
        alert("Usuário inválido.")

    }else{
        location.href="../PAGES/HOME.html";
    }

    
}