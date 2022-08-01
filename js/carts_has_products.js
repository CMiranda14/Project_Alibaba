const carts =[
  /*id_carrito_de_compras*/ /*ID_del_Producto*/ /*id_opciones*/ /*cantidad*/
    {id:3000,	product:1200,	opciones:1201,	cantidad:2},
    {id:3000,	product:1200,	opciones:1202,	cantidad:1},
    {id:3000,	product:1300,	opciones:1301,	cantidad:3},
    {id:3000,	product:1300,	opciones:1302,	cantidad:2},
    {id:3100,	product:1400,	opciones:1401,	cantidad:1},
    {id:3100,	product:1400,	opciones:1402,	cantidad:1},
    {id:3100,	product:1500,	opciones:1501,	cantidad:2},
    {id:3100,	product:1500,	opciones:1502,	cantidad:3},
    {id:3200,	product:1600,	opciones:1601,	cantidad:2},
    {id:3200,	product:1600,	opciones:1602,	cantidad:1},
    {id:3200,	product:1700,	opciones:1701,	cantidad:1},
    {id:3200,	product:1700,	opciones:1702,	cantidad:3},
    {id:3300,	product:1800,	opciones:1801,	cantidad:1},
    {id:3300,	product:1800,	opciones:1802,	cantidad:2},
    {id:3300,	product:1900,	opciones:1901,	cantidad:1},
    {id:3300,	product:1900,	opciones:1902,	cantidad:2},
    {id:3400,	product:2000,	opciones:2001,	cantidad:2},
    {id:3400,	product:2000,	opciones:2002,	cantidad:3},
    {id:3400,	product:2100,	opciones:2101,	cantidad:1},
    {id:3400,	product:2100,	opciones:2102,	cantidad:3},
    {id:3400,	product:2200,	opciones:2201,	cantidad:2},
    {id:3400,	product:2200,	opciones:2202,	cantidad:3},
    {id:3500,	product:2300,	opciones:2301,	cantidad:1},
    {id:3500,	product:2300,	opciones:2302,	cantidad:1},
    {id:3500,	product:2400,	opciones:2401,	cantidad:3},
    {id:3500,	product:2400,	opciones:2402,	cantidad:2},
    {id:3600,	product:2500,	opciones:2501,	cantidad:3},
    {id:3600,	product:2500,	opciones:2502,	cantidad:1},
    {id:3600,	product:2600,	opciones:2601,	cantidad:2},
    {id:3600,	product:2600,	opciones:2602,	cantidad:1},
    

];


function carts_has_products(){

  let categorias = document.querySelector("#carts_has_products");

  let tabla3 = '<table class="Tablab" border="0">'+
              '<tr class="columnas2">'+'<td class="casillas2">'+'ID Carrito'+'</td>'+'<td class="casillas2">'+'ID Producto'+ '</td>' +'<td class="casillas2">'+'Opciones'+ '</td>' +'<td class="casillas2">'+'Cantidad'+ '</td>'  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[0].id  +'</td>'+'<td class="casillasA">'+carts[0].carts +'<td class="casillasA">'+carts[0].opciones +'<td class="casillasA">'+carts[0].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[1].id  +'</td>'+'<td class="casillasA">'+carts[1].carts +'<td class="casillasA">'+carts[1].opciones +'<td class="casillasA">'+carts[1].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[2].id  +'</td>'+'<td class="casillasA">'+carts[2].carts +'<td class="casillasA">'+carts[2].opciones +'<td class="casillasA">'+carts[2].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[3].id  +'</td>'+'<td class="casillasA">'+carts[3].carts +'<td class="casillasA">'+carts[3].opciones +'<td class="casillasA">'+carts[3].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[4].id  +'</td>'+'<td class="casillasA">'+carts[4].carts +'<td class="casillasA">'+carts[4].opciones +'<td class="casillasA">'+carts[4].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[5].id  +'</td>'+'<td class="casillasA">'+carts[5].carts +'<td class="casillasA">'+carts[5].opciones +'<td class="casillasA">'+carts[5].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[6].id  +'</td>'+'<td class="casillasA">'+carts[6].carts +'<td class="casillasA">'+carts[6].opciones +'<td class="casillasA">'+carts[6].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[7].id  +'</td>'+'<td class="casillasA">'+carts[7].carts +'<td class="casillasA">'+carts[7].opciones +'<td class="casillasA">'+carts[7].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[8].id  +'</td>'+'<td class="casillasA">'+carts[8].carts +'<td class="casillasA">'+carts[8].opciones +'<td class="casillasA">'+carts[8].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[9].id  +'</td>'+'<td class="casillasA">'+carts[9].carts +'<td class="casillasA">'+carts[9].opciones +'<td class="casillasA">'+carts[9].cantidad +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[10].id +'</td>'+'<td class="casillasA">'+carts[10].product +'<td class="casillasA">'+carts[10].opciones +'<td class="casillasA">'+carts[10].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[11].id +'</td>'+'<td class="casillasA">'+carts[11].product +'<td class="casillasA">'+carts[11].opciones +'<td class="casillasA">'+carts[11].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[12].id +'</td>'+'<td class="casillasA">'+carts[12].product +'<td class="casillasA">'+carts[12].opciones +'<td class="casillasA">'+carts[12].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[13].id +'</td>'+'<td class="casillasA">'+carts[13].product +'<td class="casillasA">'+carts[13].opciones +'<td class="casillasA">'+carts[13].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[14].id +'</td>'+'<td class="casillasA">'+carts[14].product +'<td class="casillasA">'+carts[14].opciones +'<td class="casillasA">'+carts[14].cantidad  +'</tr>'+
              '</table>';


              let tabla4 = '<table class="Tablab" border="0">'+
              '<tr class="columnas2">'+'<td class="casillas2">'+'ID Carrito'+'</td>'+'<td class="casillas2">'+'ID Producto'+ '</td>' +'<td class="casillas2">'+'Opciones'+ '</td>' +'<td class="casillas2">'+'Cantidad'+ '</td>'  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[15].id +'</td>'+'<td class="casillasA">'+carts[15].product +'<td class="casillasA">'+carts[15].opciones +'<td class="casillasA">'+carts[15].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[16].id +'</td>'+'<td class="casillasA">'+carts[16].product +'<td class="casillasA">'+carts[16].opciones +'<td class="casillasA">'+carts[16].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[17].id +'</td>'+'<td class="casillasA">'+carts[17].product +'<td class="casillasA">'+carts[17].opciones +'<td class="casillasA">'+carts[17].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[18].id +'</td>'+'<td class="casillasA">'+carts[18].product +'<td class="casillasA">'+carts[18].opciones +'<td class="casillasA">'+carts[18].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[19].id +'</td>'+'<td class="casillasA">'+carts[19].product +'<td class="casillasA">'+carts[19].opciones +'<td class="casillasA">'+carts[19].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[20].id +'</td>'+'<td class="casillasA">'+carts[20].product +'<td class="casillasA">'+carts[20].opciones +'<td class="casillasA">'+carts[20].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[21].id +'</td>'+'<td class="casillasA">'+carts[21].product +'<td class="casillasA">'+carts[21].opciones +'<td class="casillasA">'+carts[21].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[22].id +'</td>'+'<td class="casillasA">'+carts[22].product +'<td class="casillasA">'+carts[22].opciones +'<td class="casillasA">'+carts[22].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[23].id +'</td>'+'<td class="casillasA">'+carts[23].product +'<td class="casillasA">'+carts[23].opciones +'<td class="casillasA">'+carts[23].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[24].id +'</td>'+'<td class="casillasA">'+carts[24].product +'<td class="casillasA">'+carts[24].opciones +'<td class="casillasA">'+carts[24].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[25].id +'</td>'+'<td class="casillasA">'+carts[25].product +'<td class="casillasA">'+carts[25].opciones +'<td class="casillasA">'+carts[25].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[26].id +'</td>'+'<td class="casillasA">'+carts[26].product +'<td class="casillasA">'+carts[26].opciones +'<td class="casillasA">'+carts[26].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[27].id +'</td>'+'<td class="casillasA">'+carts[27].product +'<td class="casillasA">'+carts[27].opciones +'<td class="casillasA">'+carts[27].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[28].id +'</td>'+'<td class="casillasA">'+carts[28].product +'<td class="casillasA">'+carts[28].opciones +'<td class="casillasA">'+carts[28].cantidad  +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+carts[29].id +'</td>'+'<td class="casillasA">'+carts[29].product +'<td class="casillasA">'+carts[29].opciones +'<td class="casillasA">'+carts[29].cantidad  +'</tr>'+
              '</table>';


  categorias.innerHTML = tabla3 + tabla4;

}



carts_has_products();