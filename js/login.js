/*EXPORTA LA DATA USER, PARA ANALIZAR 
SI LOS USUARIOS QUE SE COLOQUEN EXISTEN 
EN LA DATA, PIRMERO ANALIZA EL NOMBRE Y LUEGO ANALIZA
EL EMAIL DEL USUARIO SI AL MOMENTO EN NUESTRA FUNCION
QUEREMOS ANALIZAR UN DATO QUE NO EXISTE EN LA DATA USER
NOS DARA USER FALSE.


DESCRIPCION DEL ALGORITMO:
La funcionalidad del algoritmo es la de evaluar el usuario ingresado 
este e indicar si se encontroó el nombre de usuario o correo 
electronico, el algoritmo tiene las siguientes funcionalidades:

PARAMETROS:
  -data: solicita la base de datos en que se busca la informacion.
  -user: el usuario que se desea buscar en la base de datos
  
  PROCEDIMIENTO:
  -for: recorre la matriz iniciando desde o al 6

  -primer if evalua el usuario ingresado con el se indica [i][1]
   posicion del username en la data user.

  -segundo if: evalua el correo ingresado con el se indica [i][5]
   posicion del email en la data user.

  -else: Se muestra en caso de que el usuario ni el email esten
   en la data user tomandolos como falsos.
  
  */


   function Lista_Usuarios(){
    var ListaUsuarios = JSON.parse(localStorage.getItem('ListaUsuarios'));


    if(ListaUsuarios == null){
        ListaUsuarios =

        [

            /*user_id*/ /*nombre de usuario*/ /*contraseña*/ /*nombre_completo*/ /*dirección*/ /*correo electrónico*/ /*teléfono*/
            [100,	'anna0',	'white00',	'Anna Addison',	    '1325 Candy Rd, San Francisco, CA 96123',	'anna.addison@yahoo.com',	'3841019535'],
            [101,	'carol1',	'orange01',	'Carol Campbell',	'1931 Brown St, Gainesville, FL 85321',	    'carol.campbell@aol.com', 	'2548952651'],
            [102,	'julia2',	'yellow02',	'Julia Jones',	    '1622 Seaside St, Seattle, WA 32569',	    'jolie.jones@msn.com',	    '3651469235'],
            [103,	'irene3',	'blue03',	'Irene Everly',	    '1756 East Dr, Houston, TX 28562',	    'irene.everly@gmail.com',	    '9859423698'],
            [104,	'rachel4',	'red04',	'Rachel Rose',	    '1465 River Dr, Boston, MA 43625',	    'rachel.rose@hotmail.com',	    '2945632543'],
            [105,	'sophie5',	'green05',	'Sophie Sutton',	'1896 West Dr, Portland, OR 65842',	    'sophie.sutton@yahoo.com',	    '5169525614'],
            [106,	'wendy6',	'purple06',	'Wendy West',	    '1252 Vine St, Chicago, IL 73215',	    'wendy.west@gmail.com',	        '6645936156'],
        
        ]
    }

    return ListaUsuarios;
}

export function validardatos(pUsuario, pContrasena){
  var ListaUsuarios = Lista_Usuarios();
  var bAcceso =false;

  for(var i = 0; i < ListaUsuarios.length; i++){
    if(pUsuario == ListaUsuarios[i][1] && pContrasena == ListaUsuarios[i][2]){
      bAcceso = true;

      sessionStorage.setItem('usuarioActivo', ListaUsuarios [i][2] + ' ' + ListaUsuarios[i][2]);
      sessionStorage.setItem('PerfilUsuarios', ListaUsuarios[i][0]);
    }
  }
  return bAcceso;

  
}
































   // Librería de usuario
/*


import {user} from "./user.js";

// Función de verificación de credenciales
export function login(username, password){

    for(let i = 0; i<=6;i++){
       
        if(user[i][1] === username){
            console.log("Acceso con nombre de usuario");
        }else if(user[i][5] === username){
            console.log("true email");
        }else {
            console.log("user false");
        }
    }

}*/
