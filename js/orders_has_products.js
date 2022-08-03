const order_has_products = [

    /*order_id*/ /*product_id*/ /*option_id*/ /*cantidad*/
    {id:1000,	product:1200,	option:1201,	cantidad:2},
    {id:1000,	product:1200,	option:1202,	cantidad:1},
    {id:1000,	product:1300,	option:1301,	cantidad:3},
    {id:1000,	product:1300,	option:1302,	cantidad:2},
    {id:1001,	product:1400,	option:1401,	cantidad:1},
    {id:1001,	product:1400,	option:1402,	cantidad:1},
    {id:1001,	product:1500,	option:1501,	cantidad:2},
    {id:1001,	product:1500,	option:1502,	cantidad:3},
    {id:1002,	product:1600,	option:1601,	cantidad:2},
    {id:1002,	product:1600,	option:1602,	cantidad:1},
    {id:1002,	product:1700,	option:1701,	cantidad:1},
    {id:1002,	product:1700,	option:1702,	cantidad:3},
    {id:1003,	product:1800,	option:1801,	cantidad:1},
    {id:1003,	product:1800,	option:1802,	cantidad:2},
    {id:1003,	product:1900,	option:1901,	cantidad:1},
    {id:1003,	product:1900,	option:1902,	cantidad:2},
    {id:1004,	product:2000,	option:2001,	cantidad:2},
    {id:1004,	product:2000,	option:2002,	cantidad:3},
    {id:1004,	product:2100,	option:2101,	cantidad:1},
    {id:1004,	product:2100,	option:2102,	cantidad:3},
    {id:1004,	product:2200,	option:2201,	cantidad:2},
    {id:1004,	product:2200,	option:2202,	cantidad:3},
    {id:1005,	product:2300,	option:2301,	cantidad:1},
    {id:1005,	product:2300,	option:2302,	cantidad:1},
    {id:1005,	product:2400,	option:2401,	cantidad:3},
    {id:1006,	product:2400,	option:2402,	cantidad:2},
    {id:1006,	product:2500,	option:2501,	cantidad:3},
    {id:1006,	product:2500,	option:2502,	cantidad:1},
    {id:1006,	product:2600,	option:2601,	cantidad:2},
    {id:1006,	product:2600,	option:2602,	cantidad:1},
];

function carts_has_products(){

    let categorias = document.querySelector("#orders_has_products");
  
    let tabla3 = '<table class="Tablab" border="0">'+
                '<tr class="columnas2">'+'<td class="casillas2">'+'ID Orden'+'</td>'+'<td class="casillas2">'+'ID Producto'+ '</td>' +'<td class="casillas2">'+'Opciones'+ '</td>' +'<td class="casillas2">'+'Cantidad'+ '</td>'  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[0].id  +'</td>'+'<td class="casillasA">'+order_has_products[0].product +'<td class="casillasA">'+order_has_products[0].option +'<td class="casillasA">'+order_has_products[0].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[1].id  +'</td>'+'<td class="casillasA">'+order_has_products[1].product +'<td class="casillasA">'+order_has_products[1].option +'<td class="casillasA">'+order_has_products[1].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[2].id  +'</td>'+'<td class="casillasA">'+order_has_products[2].product +'<td class="casillasA">'+order_has_products[2].option +'<td class="casillasA">'+order_has_products[2].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[3].id  +'</td>'+'<td class="casillasA">'+order_has_products[3].product +'<td class="casillasA">'+order_has_products[3].option +'<td class="casillasA">'+order_has_products[3].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[4].id  +'</td>'+'<td class="casillasA">'+order_has_products[4].product +'<td class="casillasA">'+order_has_products[4].option +'<td class="casillasA">'+order_has_products[4].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[5].id  +'</td>'+'<td class="casillasA">'+order_has_products[5].product +'<td class="casillasA">'+order_has_products[5].option +'<td class="casillasA">'+order_has_products[5].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[6].id  +'</td>'+'<td class="casillasA">'+order_has_products[6].product +'<td class="casillasA">'+order_has_products[6].option +'<td class="casillasA">'+order_has_products[6].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[7].id  +'</td>'+'<td class="casillasA">'+order_has_products[7].product +'<td class="casillasA">'+order_has_products[7].option +'<td class="casillasA">'+order_has_products[7].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[8].id  +'</td>'+'<td class="casillasA">'+order_has_products[8].product +'<td class="casillasA">'+order_has_products[8].option +'<td class="casillasA">'+order_has_products[8].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[9].id  +'</td>'+'<td class="casillasA">'+order_has_products[9].product +'<td class="casillasA">'+order_has_products[9].option +'<td class="casillasA">'+order_has_products[9].cantidad +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[10].id +'</td>'+'<td class="casillasA">'+order_has_products[10].product +'<td class="casillasA">'+order_has_products[10].option +'<td class="casillasA">'+order_has_products[10].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[11].id +'</td>'+'<td class="casillasA">'+order_has_products[11].product +'<td class="casillasA">'+order_has_products[11].option +'<td class="casillasA">'+order_has_products[11].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[12].id +'</td>'+'<td class="casillasA">'+order_has_products[12].product +'<td class="casillasA">'+order_has_products[12].option +'<td class="casillasA">'+order_has_products[12].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[13].id +'</td>'+'<td class="casillasA">'+order_has_products[13].product +'<td class="casillasA">'+order_has_products[13].option +'<td class="casillasA">'+order_has_products[13].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[14].id +'</td>'+'<td class="casillasA">'+order_has_products[14].product +'<td class="casillasA">'+order_has_products[14].option +'<td class="casillasA">'+order_has_products[14].cantidad  +'</tr>'+
                '</table>';
  
  
                let tabla4 = '<table class="Tablab" border="0">'+
                '<tr class="columnas2">'+'<td class="casillas2">'+'ID Orden'+'</td>'+'<td class="casillas2">'+'ID Producto'+ '</td>' +'<td class="casillas2">'+'Opciones'+ '</td>' +'<td class="casillas2">'+'Cantidad'+ '</td>'  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[15].id +'</td>'+'<td class="casillasA">'+order_has_products[15].product +'<td class="casillasA">'+order_has_products[15].option +'<td class="casillasA">'+order_has_products[15].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[16].id +'</td>'+'<td class="casillasA">'+order_has_products[16].product +'<td class="casillasA">'+order_has_products[16].option +'<td class="casillasA">'+order_has_products[16].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[17].id +'</td>'+'<td class="casillasA">'+order_has_products[17].product +'<td class="casillasA">'+order_has_products[17].option +'<td class="casillasA">'+order_has_products[17].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[18].id +'</td>'+'<td class="casillasA">'+order_has_products[18].product +'<td class="casillasA">'+order_has_products[18].option +'<td class="casillasA">'+order_has_products[18].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[19].id +'</td>'+'<td class="casillasA">'+order_has_products[19].product +'<td class="casillasA">'+order_has_products[19].option +'<td class="casillasA">'+order_has_products[19].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[20].id +'</td>'+'<td class="casillasA">'+order_has_products[20].product +'<td class="casillasA">'+order_has_products[20].option +'<td class="casillasA">'+order_has_products[20].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[21].id +'</td>'+'<td class="casillasA">'+order_has_products[21].product +'<td class="casillasA">'+order_has_products[21].option +'<td class="casillasA">'+order_has_products[21].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[22].id +'</td>'+'<td class="casillasA">'+order_has_products[22].product +'<td class="casillasA">'+order_has_products[22].option +'<td class="casillasA">'+order_has_products[22].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[23].id +'</td>'+'<td class="casillasA">'+order_has_products[23].product +'<td class="casillasA">'+order_has_products[23].option +'<td class="casillasA">'+order_has_products[23].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[24].id +'</td>'+'<td class="casillasA">'+order_has_products[24].product +'<td class="casillasA">'+order_has_products[24].option +'<td class="casillasA">'+order_has_products[24].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[25].id +'</td>'+'<td class="casillasA">'+order_has_products[25].product +'<td class="casillasA">'+order_has_products[25].option +'<td class="casillasA">'+order_has_products[25].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[26].id +'</td>'+'<td class="casillasA">'+order_has_products[26].product +'<td class="casillasA">'+order_has_products[26].option +'<td class="casillasA">'+order_has_products[26].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[27].id +'</td>'+'<td class="casillasA">'+order_has_products[27].product +'<td class="casillasA">'+order_has_products[27].option +'<td class="casillasA">'+order_has_products[27].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[28].id +'</td>'+'<td class="casillasA">'+order_has_products[28].product +'<td class="casillasA">'+order_has_products[28].option +'<td class="casillasA">'+order_has_products[28].cantidad  +'</tr>'+
                '<tr class="columnasA">'+'<td class="casillasA">'+order_has_products[29].id +'</td>'+'<td class="casillasA">'+order_has_products[29].product +'<td class="casillasA">'+order_has_products[29].option +'<td class="casillasA">'+order_has_products[29].cantidad  +'</tr>'+
                '</table>';
  
  
    categorias.innerHTML = tabla3 + tabla4;
  
  }
  
  
  
  carts_has_products();