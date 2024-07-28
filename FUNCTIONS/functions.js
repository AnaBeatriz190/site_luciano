function verificar(){
    var nome = document.getElementById("USER").value
    var senha = document.getElementById("SENHA").value

    // var nomeLogin = "ANTONY"
    // var senhaLogin = "12345"
    var nomeLogin = localStorage.getItem("nomeLogin");
    var senhaLogin = localStorage.getItem("senhaLogin");
   
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
    console.log(nomeLogin)
    console.log(senhaLogin)
    
}

function assinar(){
    location.href="../create.html"
}
function validar(){

}
function sinscreve(){
    localStorage.setItem("nomeLogin", document.getElementById("USERN"));
    localStorage.setItem("senhaLogin", document.getElementById("SENHAN"));

    // var nomeLogin = document.getElementById("USERN").value
    // var senhaLogin = document.getElementById("SENHAN").value
    location.href="../index.html"
}