import {Category} from "./panel.js"

function categoriass(){
    let categorias = document.getElementById("categorias");

let title = '<h1 class="titulo">' + ' Categorias Alibaba ' +  '</h1>';


let div = '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Group.png?raw=true" class="img" style="width:90px;">' +
                '<p>' + Category[0].ID_categoria +  '</p>'+
                '<p>' + Category[0].id +  '</p>'+
            '</div>'  +
            
            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/phone.png?raw=true" class="img" style="width:40px;">' +
                '<p>' + Category[1].ID_categoria +  '</p>'+
                '<p>' + Category[1].id  +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/iPad%20(1).png?raw=true" class="img" style="width:90px;">' +
                '<p>' + Category[2].ID_categoria +  '</p>'+
                '<p>' + Category[2].id +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Server.png?raw=true" class="img" style="width:40px;">' +
                '<p>' + Category[3].ID_categoria +  '</p>'+
                '<p>' + Category[3].id  +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Monitor.png?raw=true" class="img" style="width:70px;">' +
                '<p>' + Category[4].ID_categoria +  '</p>'+
                '<p>' + Category[4].id +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Wire.png?raw=true" class="img" style="width:48px;">' +
                '<p>' + Category[5].ID_categoria +  '</p>'+
                '<p>' + Category[5].id +  '</p>'+
            '</div>' +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/Headphones.png?raw=true" class="img" style="width: 70px;">' +
                '<p>' + Category[6].ID_categoria +  '</p>'+
                '<p>' + Category[6].id +  '</p>'+
            '</div>'

categorias.innerHTML =  title + div; 
}

categoriass();
