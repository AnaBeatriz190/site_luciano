function verificar(){
    var nome = document.getElementById("USER").value
    var senha = document.getElementById("SENHA").value


    var nomeLogin = localStorage.getItem("nomeLogin");
    var senhaLogin = localStorage.getItem("senhaLogin");
    var alerta = document.getElementById("alerta");
    if (nome == nomeLogin){
        var passNome = true
    }
    if (senha == senhaLogin){
        var passSenha = true
    }
    
    if (!passNome && !passSenha){
        // alert("Usuário e senha inválidos.")
        alerta.style.display="block"
        alerta.innerHTML = "Erro! Por favor, digite o e-mail e a senha corretos."

    }else if (passNome && !passSenha){
        alerta.style.display="block"
        alerta.innerHTML = "Erro! Por favor, digite a senha correta."
        

    }else if(!passNome && passSenha){
        alerta.style.display="block"
        alerta.innerHTML = "Erro! Por favor, digite o usuário correto"
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
    localStorage.setItem("nomeLogin", document.getElementById("USERN").value);
    localStorage.setItem("senhaLogin", document.getElementById("SENHAN").value);

    // var nomeLogin = document.getElementById("USERN").value
    // var senhaLogin = document.getElementById("SENHAN").value
    location.href="../index.html"
}