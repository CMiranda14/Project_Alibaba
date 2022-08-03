import {pedidosUsuarios} from "./panel.js"

let pedidosU = document.getElementById("pedidosU");

let title = '<h1 class="titulo">' + ' Pedidos recibidos 2022' +  '</h1>';

let table = '<table border="1" class="tabla">' + 
                '<tr class="titulos">' +
                    '<td>' + 'ID usuario' + '</td>' +
                    '<td>' +  'ID pedido'   + '</td>' +
                '</tr>' +

                '<tr class="texts">' +
                    '<td>' + pedidosUsuarios[0].ID_User   + '</td>' +
                    '<td>' + pedidosUsuarios[0].ID_Pedido + '</td>' +  
                '</tr>' +

                '<tr class="texts">' +
                    '<td>' + pedidosUsuarios[1].ID_User   + '</td>' +
                    '<td>' + pedidosUsuarios[1].ID_Pedido + '</td>' +  
                '</tr>' +

                '<tr class="texts">' +
                    '<td>' + pedidosUsuarios[2].ID_User   + '</td>' +
                    '<td>' + pedidosUsuarios[2].ID_Pedido + '</td>' +  
                '</tr>' +

                '<tr class="texts">' +
                    '<td>' + pedidosUsuarios[3].ID_User   + '</td>' +
                    '<td>' + pedidosUsuarios[3].ID_Pedido + '</td>' +  
                '</tr>' +

                '<tr class="texts">' +
                    '<td>' + pedidosUsuarios[4].ID_User   + '</td>' +
                    '<td>' + pedidosUsuarios[4].ID_Pedido + '</td>' +  
                '</tr>' +

                '<tr class="texts">' +
                    '<td>' + pedidosUsuarios[5].ID_User   + '</td>' +
                    '<td>' + pedidosUsuarios[5].ID_Pedido + '</td>' +  
                '</tr>' +

                '<tr class="texts">' +
                    '<td>' + pedidosUsuarios[6].ID_User   + '</td>' +
                    '<td>' + pedidosUsuarios[6].ID_Pedido + '</td>' +  
                '</tr>' +



                '</table>';

pedidosU.innerHTML =  title + table; 