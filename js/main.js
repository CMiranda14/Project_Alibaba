import {validardatos} from "./login.js";


document.querySelector('#btIniciar').addEventListener('click', 
iniciarSesion);

function iniciarSesion(){
    var sUsuario = '';
    var sContrasena = '';
    var bAcceso = false;

    sUsuario = document.querySelector('#txtusername').value;
    sContrasena = document.querySelector('#txtpassword').value;

    bAcceso = validardatos(sUsuario, sContrasena);
    
    if(bAcceso == true){
        ingresar();
    }
}


function ingresar(){
    var perfil = sessionStorage.getItem('PerfilUsuarios');
        switch(perfil){
        case '100':
            window.location.href = 'anna0.html';
        break;
        case '101':
            window.location.href = 'carol1.html';
        break;
        case '102':
            window.location.href = 'julia2.html';
        break;
        case '103':
            window.location.href = 'irene3.html';
        break;
        case '104':
            window.location.href = 'rachel4.html';
        break;
        case '105':
            window.location.href = 'sophie5.html';
        break;
        case '106':
            window.location.href = 'wendy6.html';
        break;
        default:
            window.location.href = 'index.html';
        break;
            
    }
    }
    



    //MENU

 


    
                








































/*import {login} from "./login.js"


function recuperar_datos(e) {
    e.preventDefault(); //<-- Evita que el formulario se recargue

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //Programa login
    login(username,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#login");//<-- Instancia del formulario
bt_entrar.addEventListener('submit',recuperar_datos); //<-- Evento


function registro_alibaba() {
    var x = document.getElementById("vent2");
    if (x.style.display === "none") {

    } else {
        x.style.display = "none";
    }
}

bt3.addEventListener('click' ,registro_alibaba);*/




