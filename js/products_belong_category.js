export const products_belong_category = [

    /*id_producto*/ /*id_categoría*/
    {id:1200,	ca:4000},
    {id:1300,	ca:4000},
    {id:1400,	ca:4100},
    {id:1500,	ca:4100},
    {id:1600,	ca:4100},
    {id:1700,	ca:4200},
    {id:1800,	ca:4200},
    {id:1900,	ca:4300},
    {id:2000,	ca:4300},
    {id:2100,	ca:4400},
    {id:2200,	ca:4400},
    {id:2300,	ca:4500},
    {id:2400,	ca:4500},
    {id:2500,	ca:4600},
    {id:2600,	ca:4600},

];


function categoria_de_productos (){

    let categorias = document.querySelector("#caja_categoria_productos");

    let tabla3 = '<table class="Tabla" border="0">'+
                '<h1 class="title">'+'Categoria y producto Asignando'+'</h1>'+
                '<tr class="columnas1">'+'<td class="casillas1">'+'ID Producto'+'</td>'+'<td class="casillas1">'+'ID categoría'+ '</td>' +'</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[0].id +'</td>'+'<td class="casillas">'+products_belong_category[0].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[1].id +'</td>'+'<td class="casillas">'+products_belong_category[1].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[2].id +'</td>'+'<td class="casillas">'+products_belong_category[2].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[3].id +'</td>'+'<td class="casillas">'+products_belong_category[3].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[4].id +'</td>'+'<td class="casillas">'+products_belong_category[4].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[5].id +'</td>'+'<td class="casillas">'+products_belong_category[5].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[6].id +'</td>'+'<td class="casillas">'+products_belong_category[6].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[7].id +'</td>'+'<td class="casillas">'+products_belong_category[7].ca + '</tr>'+
                '</table>';

    let tabla4 = '<table class="Tabla1" border="0">'+
                 '<tr class="columnas1">'+'<td class="casillas1">'+'ID Producto'+'</td>'+'<td class="casillas1">'+'ID categoría'+ '</td>' +'</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[8].id +'</td>'+'<td class="casillas">'+products_belong_category[8].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[9].id +'</td>'+'<td class="casillas">'+products_belong_category[9].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[10].id +'</td>'+'<td class="casillas">'+products_belong_category[10].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[11].id +'</td>'+'<td class="casillas">'+products_belong_category[11].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[12].id +'</td>'+'<td class="casillas">'+products_belong_category[12].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[13].id +'</td>'+'<td class="casillas">'+products_belong_category[13].ca + '</tr>'+
                '<tr class="columnas">'+'<td class="casillas">'+products_belong_category[14].id +'</td>'+'<td class="casillas">'+products_belong_category[14].ca + '</tr>'+
                '</table>';

    categorias.innerHTML = tabla3 + tabla4;

}



categoria_de_productos();

