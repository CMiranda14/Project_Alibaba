export const product_sold_vendor = [

    /*id_proveedor*/ /*id_producto*/
    {id:5000,	di:'1200'},
    {id:5000,	di:'1300'},
    {id:5100,	di:'1400'},
    {id:5100,	di:'1500'},
    {id:5100,	di:'1600'},
    {id:5200,	di:'1700'},
    {id:5200,	di:'1800'},
    {id:5300,	di:'1900'},
    {id:5300,	di:'2000'},
    {id:5400,	di:'2100'},
    {id:5400,	di:'2200'},
    {id:5500,	di:'2300'},
    {id:5500,	di:'2400'},
    {id:5600,	di:'2500'},
    {id:5600,	di:'2600'},

];


function tabla_1(){

    let cuadro_1 = document.querySelector("#caja_product_vendidos");
  
  
  
  
    let tabla1 = '<table class="Tabla" border="0">'+ 
                '<h1 class="title">'+'Proveedor y producto Asignando'+'</h1>'+
                '<tr class="columnas1">'+'<td class="casillas1">'+'ID Proveedor'+'</td>'+'<td class="casillas1">'+'ID Producto'+ '</td>' +'</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[0].id +'</td>'+'<td class="casillas">'+product_sold_vendor[0].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[1].id +'</td>'+'<td class="casillas">'+product_sold_vendor[1].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[2].id +'</td>'+'<td class="casillas">'+product_sold_vendor[2].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[3].id +'</td>'+'<td class="casillas">'+product_sold_vendor[3].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[4].id +'</td>'+'<td class="casillas">'+product_sold_vendor[4].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[5].id +'</td>'+'<td class="casillas">'+product_sold_vendor[5].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[6].id +'</td>'+'<td class="casillas">'+product_sold_vendor[6].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[7].id +'</td>'+'<td class="casillas">'+product_sold_vendor[7].di + '</tr>'+
                '</table>';
  
  
    let tabla2 = '<table class="Tabla1" border="0">'+ 
                '<tr class="columnas1">'+'<td class="casillas1">'+'ID Proveedor'+'</td>'+'<td class="casillas1">'+'ID Producto'+ '</td>' +'</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[8].id +'</td>'+'<td class="casillas">'+product_sold_vendor[8].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[9].id +'</td>'+'<td class="casillas">'+product_sold_vendor[9].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[10].id +'</td>'+'<td class="casillas">'+product_sold_vendor[10].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[11].id +'</td>'+'<td class="casillas">'+product_sold_vendor[11].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[12].id +'</td>'+'<td class="casillas">'+product_sold_vendor[12].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[13].id +'</td>'+'<td class="casillas">'+product_sold_vendor[13].di + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+product_sold_vendor[14].id +'</td>'+'<td class="casillas">'+product_sold_vendor[14].di + '</tr>'+
                '</table>';
  
        cuadro_1.innerHTML = tabla1 + tabla2;
  
  }
  
  tabla_1();







