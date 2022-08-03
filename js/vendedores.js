import {vendedores} from "./panel.js"

let Distribuidores = document.getElementById("Distribuidores");

let title = '<h1 class="titulo">' + ' Distruibuidores Alibaba ' +  '</h1>';


let div = '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/pngegg.png?raw=true" class="img" style="width: 170px;">' +
            '<p>' + vendedores[0].id    +  '</p>'+
            '<p>' + vendedores[0].name  +  '</p>'+
            '<p>' + vendedores[0].phone +  '</p>'+
            '<p>' + vendedores[0].email +  '</p>'+
        '</div>'   +

        '<div class="cajas">' +
            '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png" class="img" style="width:200px;">' +
            '<p>' + vendedores[1].id    +  '</p>'+
            '<p>' + vendedores[1].name  +  '</p>'+
            '<p>' + vendedores[1].phone +  '</p>'+
            '<p>' + vendedores[1].email +  '</p>'+
        '</div>'  +

        '<div class="cajas">' +
            '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/1280px-Lenovo_logo_2015.svg.png" class="img" style="width: 200px;">' +
            '<p>' + vendedores[2].id    +  '</p>'+
            '<p>' + vendedores[2].name  +  '</p>'+
            '<p>' + vendedores[2].phone +  '</p>'+
            '<p>' + vendedores[2].email +  '</p>'+
        '</div>'  +

        '<div class="cajas">' +
            '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/1280px-ASUS_Logo.svg.png" class="img" style="width: 200px;">' +
            '<p>' + vendedores[3].id    +  '</p>'+
            '<p>' + vendedores[3].name  +  '</p>'+
            '<p>' + vendedores[3].phone +  '</p>'+
            '<p>' + vendedores[3].email +  '</p>'+
        '</div>'  +

        '<div class="cajas">' +
            '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/799px-Dell_Logo.png" class="img" style="width: 200px;">' +
            '<p>' + vendedores[4].id    +  '</p>'+
            '<p>' + vendedores[4].name  +  '</p>'+
            '<p>' + vendedores[4].phone +  '</p>'+
            '<p>' + vendedores[4].email +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Monoprice_logo_black.svg/1200px-Monoprice_logo_black.svg.png" class="img" style="width: 200px;">' +
            '<p>' + vendedores[5].id    +  '</p>'+
            '<p>' + vendedores[5].name  +  '</p>'+
            '<p>' + vendedores[5].phone +  '</p>'+
            '<p>' + vendedores[5].email +  '</p>'+
        '</div>'  +
        
        '<div class="cajas">' +
            '<img src="https://logodownload.org/wp-content/uploads/2014/02/sony-logo-1.png" class="img" style="width: 200px;">' +
            '<p>' + vendedores[6].id    +  '</p>'+
            '<p>' + vendedores[6].name  +  '</p>'+
            '<p>' + vendedores[6].phone +  '</p>'+
            '<p>' + vendedores[6].email +  '</p>'+
        '</div>'  
 

Distribuidores.innerHTML =  title + div; 