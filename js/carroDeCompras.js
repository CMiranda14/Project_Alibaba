import {compras} from "./panel.js"

let CarrosDeCompras = document.getElementById("CarrosDeCompras");

let title = '<h1 class="titulo">' + ' Carro de compras Alibaba' +  '</h1>';

let table = '<table border="1" class="tabla">' + 
                    '<tr class="titulos">' +
                        '<td>' + 'ID tarjetas de compras' + '</td>' +
                        '<td>' +  'Estado'   + '</td>' +
                    '</tr>' +

                    '<tr class="texts">' +
                        '<td>' + compras[0].ID     + '</td>' +
                        '<td>' + compras[0].estado + '</td>' +  
                    '</tr>' +

                    '<tr class="texts" style="background-color: #ECF0F1">' +
                        '<td>' + compras[1].ID     + '</td>' +
                        '<td>' + compras[1].estado + '</td>' + 
                    '</tr>' +

                    '<tr class="texts">' +
                        '<td>' + compras[2].ID     + '</td>' +
                        '<td>' + compras[2].estado + '</td>' + 
                    '</tr>' +

                    '<tr class="texts" style="background-color: #ECF0F1">' +
                        '<td>' + compras[3].ID  + '</td>' +
                        '<td>' + compras[4].estado    + '</td>' + 
                    '</tr>' +

                    '<tr class="texts">' +
                        '<td>' + compras[4].ID  + '</td>' +
                        '<td>' + compras[4].estado    + '</td>' + 
                    '</tr>' +

                    '<tr class="texts" style="background-color: #ECF0F1">' +
                        '<td>' + compras[5].ID  + '</td>' +
                        '<td>' + compras[5].estado    + '</td>' +   
                    '</tr class="texts">' +

                    '<tr class="texts">' +
                        '<td>' + compras[6].ID  + '</td>' +
                        '<td>' + compras[6].estado    + '</td>' + 
                    '</tr>' +

                '</table>';

CarrosDeCompras.innerHTML =  title + table; 