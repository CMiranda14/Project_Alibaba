 const option =[
   
   /*option_id */	/*option_name*/
    {id:1201,	name:'Macbook Pro 13.3-inch'},
    {id:1202,	name:'Macbook Pro 15.4-inch'},
    {id:1301,	name:'Macbook Air 11.6-inch'},
    {id:1302,	name:'Macbook Air 13-inch'},
    {id:1401,	name:'Iphone X 128GB'},
    {id:1402,	name:'Iphone X 256GB'},
    {id:1501,	name:'Iphone 7 64GB'},
    {id:1502,	name:'Iphone 7 32GB'},
    {id:1601,	name:'Iphone 8 64GB'},
    {id:1602,	name:'Iphone 8 128GB'},
    {id:1701,	name:'Ipad Air 9.7-inch'},
    {id:1702,	name:'Ipad Air 12-inch'},
    {id:1801,	name:'Ipad Mini 7.9-inch'},
    {id:1802,	name:'Ipad Mini 10-inch'},
    {id:1901,	name:'ESC8000 G3 - 8 G Intel Xeon E5-1603 V4(2.80GHz,140W,L3:10M)'},
    {id:1902,	name:'ESC8000 G3 - 8 G Intel Xeon E5-1620 v3 (3.5G,140W,L3:10M,4C,HT)'},
    {id:2001,	name:'ESC8000 G4 - 8 G Intel Xeon E5-1603 v3 (3.5G,140W,L3:10M,4C,HT)'},
    {id:2002,	name:'ESC8000 G4 - 8 G Intel Xeon E5-1620 v3 (3.5G,140W,L3:10M,4C,HT)'},
    {id:2101,	name:'XPS 13 - 5080 8GB LPDDR3 1866MHz'},
    {id:2102,	name:'XPS 13 - 5080 16GB LPDDR3 1866MHz'},
    {id:2201,	name:'XPS 15- 5070 256GB PCIe Solid State Drive'},
    {id:2202,	name:'XPS 15- 5070 500GB PCIe Solid State Drive'},
    {id:2301,	name:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 1ft'},
    {id:2302,	name:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 1.5ft'},
    {id:2401,	name:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 3ft'},
    {id:2402,	name:'Monoprice Ultra Slim Series High Speed HDMI Cable - 4K - Length - 5ft'},
    {id:2501,	name:'COWIN E7 PRO - Black'},
    {id:2502,	name:'COWIN E7 PRO - Red'},
    {id:2601,	name:'COWIN E7 PRO - Pink'},
    {id:2602,	name:'COWIN E7 PRO - White'},

 ];

 function products_has_optons(){

  let categorias = document.querySelector("#caja_products_option");

  let tabla3 = '<table class="TablaA" border="0">'+
              '<tr class="columnas2">'+'<td class="casillas2">'+'ID Producto'+'</td>'+'<td class="casillas2">'+'ID opción'+ '</td>' +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[0].id  +'</td>'+'<td class="casillasA">'+option[0].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[1].id  +'</td>'+'<td class="casillasA">'+option[1].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[2].id  +'</td>'+'<td class="casillasA">'+option[2].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[3].id  +'</td>'+'<td class="casillasA">'+option[3].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[4].id  +'</td>'+'<td class="casillasA">'+option[4].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[5].id  +'</td>'+'<td class="casillasA">'+option[5].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[6].id  +'</td>'+'<td class="casillasA">'+option[6].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[7].id  +'</td>'+'<td class="casillasA">'+option[7].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[8].id  +'</td>'+'<td class="casillasA">'+option[8].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[9].id  +'</td>'+'<td class="casillasA">'+option[9].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[10].id +'</td>'+'<td class="casillasA">'+option[10].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[11].id +'</td>'+'<td class="casillasA">'+option[11].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[12].id +'</td>'+'<td class="casillasA">'+option[12].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[13].id +'</td>'+'<td class="casillasA">'+option[13].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[14].id +'</td>'+'<td class="casillasA">'+option[14].name +'</tr>'+
              '</table>';

  let tabla4 = '<table class="TablaA" border="0">'+
              '<tr class="columnas2">'+'<td class="casillas2">'+'ID Producto'+'</td>'+'<td class="casillas2">'+'ID opción'+ '</td>' +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[15].id +'</td>'+'<td class="casillasA">'+option[15].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[16].id +'</td>'+'<td class="casillasA">'+option[16].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[17].id +'</td>'+'<td class="casillasA">'+option[17].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[18].id +'</td>'+'<td class="casillasA">'+option[18].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[19].id +'</td>'+'<td class="casillasA">'+option[19].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[20].id +'</td>'+'<td class="casillasA">'+option[20].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[21].id +'</td>'+'<td class="casillasA">'+option[21].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[22].id +'</td>'+'<td class="casillasA">'+option[22].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[23].id +'</td>'+'<td class="casillasA">'+option[23].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[24].id +'</td>'+'<td class="casillasA">'+option[24].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[25].id +'</td>'+'<td class="casillasA">'+option[25].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[26].id +'</td>'+'<td class="casillasA">'+option[26].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[27].id +'</td>'+'<td class="casillasA">'+option[27].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[28].id +'</td>'+'<td class="casillasA">'+option[28].name +'</tr>'+
              '<tr class="columnasA">'+'<td class="casillasA">'+option[29].id +'</td>'+'<td class="casillasA">'+option[29].name +'</tr>'+
              '</table>';
      


  categorias.innerHTML = tabla3 + tabla4;

}



products_has_optons();