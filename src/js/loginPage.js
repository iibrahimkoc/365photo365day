function signup(){
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "flex";
    document.getElementById("title").innerText ="Sign up 🚀";
}

function login(){
    document.getElementById("login").style.display = "flex";
    document.getElementById("signup").style.display = "none";
    document.getElementById("title").innerText ="Login 🚀";
}