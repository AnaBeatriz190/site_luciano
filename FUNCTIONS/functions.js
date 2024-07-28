function verificar(){
    var nome = document.getElementById("USER").value
    var senha = document.getElementById("SENHA").value

    // var nomeLogin = "ANTONY"
    // var senhaLogin = "12345"
    if (nome == nomeLogin){
        var passNome = true
    }
    if (senha == senhaLogin){
        var passSenha = true
    }
    
    if (!passNome && !passSenha){
        alert("Usuário e senha inválidos.")

    }else if (passNome && !passSenha){
        alert("Senha inválida")

    }else if(!passNome && passSenha){
        alert("Usuário inválido.")

    }else{
        location.href="../PAGES/HOME.html";
    }
    // location.href="../PAGES/HOME.html";

    
}

function assinar(){
    location.href="../create.html"
}
function validar(){

}
function sinscreve(){
    var nomeLogin = document.getElementById("USERN").value
    var senhaLogin = document.getElementById("SENHAN").value
    location.href="../index.html"
}