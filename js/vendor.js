const vendor = [

    /*proveedor_id*/ /*proveedor_nombre*/ /*proveedor_teléfono*/ /*proveedor_email*/
    {proveedor:5000,	name:'Apple', 	    phone:'2569561656',	email:'apple@gmail.com'},
    {proveedor:5100,	name:'Microsoft', 	phone:'6165486561',	email:'microsoft@gmail.com'},
    {proveedor:5200,	name:'Lenovo', 	    phone:'3215689466',	email:'lenovo@gmail.com'},
    {proveedor:5300,	name:'Asus', 	    phone:'9568484613',	email:'asus@gmail.com'},
    {proveedor:5400,	name:'Dell', 	    phone:'8465473132',	email:'dell@gmail.com'},
    {proveedor:5500,	name:'Monoprice', 	phone:'3189831684',	email:'monoprice@gmail.com'},
    {proveedor:5600,	name:'Sony', 	    phone:'4846531876',	email:'sony@gmail.com'},
];



function vendedores(){

    let impresion = document.querySelector("#vendor");

    let p1 = '<div class="caja2">'+
                '<img class="img_vendor" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg">'+'</img>'+
                '<h1 class="descripcion_vendor">'+'Vendedor: '+vendor[0].proveedor+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Nombre: '+ vendor[0].name+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Teléfono: '+vendor[0].phone+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Correo: '+vendor[0].email+'</h1>'+
                '</div>' ;

    let p2 = '<div class="caja2">'+
                '<img class="img_vendor" src="https://cdn.pixabay.com/photo/2013/02/12/09/07/microsoft-80660_960_720.png">'+'</img>'+
                '<h1 class="descripcion_vendor">'+'Vendedor: '+ vendor[1].proveedor+'</v>'+
                '<h1 class="descripcion_vendor">'+'Nombre: '+ vendor[1].name+'</h1>'+ 
                '<h1 class="descripcion_vendor">'+'Teléfono: '+vendor[1].phone+'</h1>'+
                '<h1 class="descripcion_vendor">'+vendor[1].email+'</h1>'+
                '</div>' ;

    let p3 = '<div class="caja2">'+
                '<img class="img_vendor1" src="https://logodownload.org/wp-content/uploads/2014/09/lenovo-logo-1-1.png">'+'</img>'+
                '<h1 class="descripcion_vendor">'+'Vendedor: '+vendor[2].proveedor+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Nombre: '+ vendor[2].name+'</h1>'+ 
                '<h1 class="descripcion_vendor">'+'Teléfono: '+vendor[2].phone+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Correo: '+vendor[2].email+'</h1>'+
                '</div>' ;


    impresion.innerHTML = p1 + p2 + p3 ;

}


vendedores();


function vendedores1(){

    let impresion1 = document.querySelector("#vendor1");



    let p4 = '<div class="caja2">'+
                '<img class="img_vendor1" src="https://logodownload.org/wp-content/uploads/2014/09/asus-logo-1.png">'+'</img>'+
                '<h1 class="descripcion_vendor">'+'Vendedor: '+vendor[3].proveedor+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Nombre: '+ vendor[3].name+'</h1>'+ 
                '<h1 class="descripcion_vendor">'+'Teléfono: '+vendor[3].phone+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Correo: '+vendor[3].email+'</h1>'+
                '</div>' ;


    
    let p5 = '<div class="caja2">'+
                '<img class="img_vendor" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png">'+'</img>'+
                '<h1 class="descripcion_vendor">'+'Vendedor: '+vendor[4].proveedor+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Nombre: '+ vendor[4].name+'</h1>'+ 
                '<h1 class="descripcion_vendor">'+'Teléfono: '+vendor[4].phone+'</h1>'+
                '<h1 class="descripcion_vendor">'+'Correo: '+vendor[4].email+'</h1>'+
                '</div>' ;
    


    impresion1.innerHTML =  p4 +p5;

}


vendedores1();