import {option} from "./panel.js"

function products(){
    let ProductO = document.getElementById("ProductO");

let title = '<h1 class="titulo">' + ' Opciones de Producto ' +  '</h1>';

let div = '<div class="cajas">' +
                '<img src="https://static.wixstatic.com/media/72f8ee_1abacc32e09d4829bf8022b848f40ae9~mv2.png/v1/fill/w_395,h_222,q_90/72f8ee_1abacc32e09d4829bf8022b848f40ae9~mv2.png" class="img" style="width: 170px;">' +
                '<p>' + option[0].ID_productos  +  '</p>'+
                '<p>' + option[0].option_ID     +  '</p>'+
                '<p>' + option[0].cantidad      +  '</p>'+
                '<p>' + option[0].precio        +  '</p>'+
                '<p>' + option[0].En_Venta      +  '</p>'+
                '<br>'+
                '<p>' + option[0].caracteristicas +  '</p>'+
            '</div>'  +

            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/MBP_13__May42020._CB432199780_.png?raw=true" class="img" style="width: 260px;">' +
                '<p>' + option[1].ID_productos  +  '</p>'+
                '<p>' + option[1].option_ID     +  '</p>'+
                '<p>' + option[1].cantidad      +  '</p>'+
                '<p>' + option[1].precio        +  '</p>'+
                '<p>' + option[1].En_Venta      +  '</p>'+
                '<br>'+
                '<p>' + option[1].caracteristicas +  '</p>'+
            '</div>' +
        
            '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/macbook-air-2014-11in-device-240.png?raw=true" class="img" style="width: 170px;">' +
                '<p>' + option[2].ID_productos  +  '</p>'+
                '<p>' + option[2].option_ID     +  '</p>'+
                '<p>' + option[2].cantidad      +  '</p>'+
                '<p>' + option[2].precio        +   '</p>'+
                '<p>' + option[2].En_Venta      +  '</p>'+
                '<br>'+
                '<p>' + option[2].caracteristicas +  '</p>'+
            '</div>' +

        '<div class="cajas">' +
                '<img src="https://github.com/MariaR17/vector/blob/main/91zhsBYJxGL._AC_SX679_-modified.png?raw=true" class="img" style="width: 170px;">' +
                '<p>' + option[3].ID_productos  +  '</p>'+
                '<p>' + option[3].option_ID     +  '</p>'+
                '<p>' + option[3].cantidad      +  '</p>'+
                '<p>' + option[3].precio        +  '</p>'+
                '<p>' + option[3].En_Venta      +  '</p>'+
                '<br>'+
                '<p>' + option[3].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-x-space-gray.png?v=5" class="img" style="width: 150px;">' +
            '<p>' + option[4].ID_productos  +  '</p>'+
            '<p>' + option[4].option_ID     +  '</p>'+
            '<p>' + option[4].cantidad      +  '</p>'+
            '<p>' + option[4].precio        +  '</p>'+
            '<p>' + option[4].En_Venta      +  '</p>'+
            '<br>'+
            '<p>' + option[4].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP770/iphonex.png" class="img" style="width: 200px;">' +
            '<p>' + option[5].ID_productos  +  '</p>'+
            '<p>' + option[5].option_ID     +  '</p>'+
            '<p>' + option[5].cantidad      +  '</p>'+
            '<p>' + option[5].precio        +  '</p>'+
            '<p>' + option[5].En_Venta      +  '</p>'+
            '<br>'+
            '<p>' + option[5].caracteristicas +  '</p>'+
        '</div>' +

        
        '<div class="cajas">' +
            '<img src="https://www.directlinkcom.co.uk/wp-content/uploads/2022/02/n-7.png" class="img" style="width: 140px;">' +
            '<p>' + option[6].ID_productos  +  '</p>'+
            '<p>' + option[6].option_ID     +  '</p>'+
            '<p>' + option[6].cantidad      +  '</p>'+
            '<p>' + option[6].precio        +  '</p>'+
            '<p>' + option[6].En_Venta      +  '</p>'+
            '<br>'+
            '<p>' + option[6].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://files.refurbed.com/pi/iphone-7-1556011909.jpg" class="img" style="width: 90px;">' +
            '<p>' + option[7].ID_productos  +  '</p>'+
            '<p>' + option[7].option_ID     +  '</p>'+
            '<p>' + option[7].cantidad      +  '</p>'+
            '<p>' + option[7].precio        +  '</p>'+
            '<p>' + option[7].En_Venta      +  '</p>'+
            '<br>'+
            '<p>' + option[7].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://i2.wp.com/doctormovil.co/wp-content/uploads/2021/10/IPHONE-8-PLUS-TODOS.png?fit=755%2C686&ssl=1" class="img" style="width: 150px;">' +
            '<p>' + option[8].ID_productos  +  '</p>'+
            '<p>' + option[8].option_ID     +  '</p>'+
            '<p>' + option[8].cantidad      +  '</p>'+
            '<p>' + option[8].precio        +  '</p>'+
            '<p>' + option[8].En_Venta      +  '</p>'+
            '<br>'+
            '<p>' + option[8].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://specials.mediamarkt.es/sites/default/files/landing/node-656/img/desktop/s-1-3.png" class="img" style="width: 60px;">' +
            '<p>' + option[9].ID_productos  +  '</p>'+
            '<p>' + option[9].option_ID     +  '</p>'+
            '<p>' + option[9].cantidad      +  '</p>'+
            '<p>' + option[9].precio        +  '</p>'+
            '<p>' + option[9].En_Venta      +  '</p>'+
            '<br>'+
            '<p>' + option[9].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://i.pinimg.com/originals/4d/dd/f3/4dddf38e326520a2a4cacf8357ebb0da.png" class="img" style="width: 124px;">' +
            '<p>' + option[10].ID_productos +  '</p>'+
            '<p>' + option[10].option_ID    +  '</p>'+
            '<p>' + option[10].cantidad     +  '</p>'+
            '<p>' + option[10].precio       +  '</p>'+
            '<p>' + option[10].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[10].caracteristicas +  '</p>'+
        '</div>'  +

        '<div class="cajas">' +
            '<img src="https://m.media-amazon.com/images/I/71VbHaAqbML._AC_SX679_.jpg" class="img" style="width: 120px;">' +
            '<p>' + option[11].ID_productos +  '</p>'+
            '<p>' + option[11].option_ID    +  '</p>'+
            '<p>' + option[11].cantidad     +  '</p>'+
            '<p>' + option[11].precio       +  '</p>'+
            '<p>' + option[11].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[11].caracteristicas +  '</p>'+
        '</div>'  +

        '<div class="cajas">' +
            '<img src="https://www.touchpoint.com.au/wp-content/uploads/2020/08/50035100_533880.png" class="img" style="width: 210px;">' +
            '<p>' + option[12].ID_productos +  '</p>'+
            '<p>' + option[12].option_ID    +  '</p>'+
            '<p>' + option[12].cantidad     +  '</p>'+
            '<p>' + option[12].precio       +  '</p>'+
            '<p>' + option[12].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[12].caracteristicas +  '</p>'+
        '</div>'  +

        '<div class="cajas">' +
            '<img src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP850/sp850-ipad-mini-6gen-480.png" class="img" style="width: 140px;">' +
            '<p>' + option[13].ID_productos +  '</p>'+
            '<p>' + option[13].option_ID    +  '</p>'+
            '<p>' + option[13].cantidad     +  '</p>'+
            '<p>' + option[13].precio       +  '</p>'+
            '<p>' + option[13].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[13].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/1116-207-2-scaled-modified.png?raw=true" class="img" style="width: 230px;">' +
            '<p>' + option[14].ID_productos +  '</p>'+
            '<p>' + option[14].option_ID    +  '</p>'+
            '<p>' + option[14].cantidad     +  '</p>'+
            '<p>' + option[14].precio       +  '</p>'+
            '<p>' + option[14].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[14].caracteristicas +  '</p>'+
        '</div>' +

        
        '<div class="cajas">' +
            '<img src="https://portwell.com/im/server/NURO-771R.jpg" class="img" style="width: 200px;">' +
            '<p>' + option[15].ID_productos +  '</p>'+
            '<p>' + option[15].option_ID    +  '</p>'+
            '<p>' + option[15].cantidad     +  '</p>'+
            '<p>' + option[15].precio       +  '</p>'+
            '<p>' + option[15].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[15].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://www.asus.com/Commercial-Servers-Workstations/RS300-E10-PS4/websites/global/products/K7CM668iUB4mDcRh/img/RS300-E10-PS4.png" class="img" style="width: 230px;">' +
            '<p>' + option[16].ID_productos +  '</p>'+
            '<p>' + option[16].option_ID    +  '</p>'+
            '<p>' + option[16].cantidad     +  '</p>'+
            '<p>' + option[16].precio       +  '</p>'+
            '<p>' + option[16].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[16].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/34485-13408527-modified.png?raw=true" class="img" style="width: 150px;">' +
            '<p>' + option[17].ID_productos +  '</p>'+
            '<p>' + option[17].option_ID    +  '</p>'+
            '<p>' + option[17].cantidad     +  '</p>'+
            '<p>' + option[17].precio       +  '</p>'+
            '<p>' + option[17].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[17].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/m0shi1omaamuiydcahus%20(1)%20(1).png?raw=true" class="img" style="width: 170px;">' +
            '<p>' + option[18].ID_productos +  '</p>'+
            '<p>' + option[18].option_ID    +  '</p>'+
            '<p>' + option[18].cantidad     +  '</p>'+
            '<p>' + option[18].precio       +  '</p>'+
            '<p>' + option[18].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[18].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://www.notebookcheck-cn.com/fileadmin/Notebooks/Dell/XPS_15_7700HQ_UHD/xps159560uhd.png" class="img" style="width: 170px;">' +
            '<p>' + option[19].ID_productos +  '</p>'+
            '<p>' + option[19].option_ID    +  '</p>'+
            '<p>' + option[19].cantidad     +  '</p>'+
            '<p>' + option[19].precio       +  '</p>'+
            '<p>' + option[19].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[19].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/%5BEP672%5D%20LAPTOP%20DELL%20INSPIRON%2014%203467%20CORE%20I5%207200U%208GB%201TB%20HDD%20W10H%2014_%20ESPA%C3%91OL%20NEGRO_.png?raw=true" class="img" style="width: 190px;">' +
            '<p>' + option[20].ID_productos +  '</p>'+
            '<p>' + option[20].option_ID    +  '</p>'+
            '<p>' + option[20].cantidad     +  '</p>'+
            '<p>' + option[20].precio       +  '</p>'+
            '<p>' + option[20].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[20].caracteristicas +  '</p>'+
        '</div>' +

        
        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/download_2__227.png?raw=true" class="img" style="width: 130px;">' +
            '<p>' + option[21].ID_productos +  '</p>'+
            '<p>' + option[21].option_ID    +  '</p>'+
            '<p>' + option[21].cantidad     +  '</p>'+
            '<p>' + option[21].precio       +  '</p>'+
            '<p>' + option[21].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[21].caracteristicas +  '</p>'+
        '</div>'  +
              
        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/135761-modified.png?raw=true" class="img" style="width: 130px;">' +
            '<p>' + option[22].ID_productos +  '</p>'+
            '<p>' + option[22].option_ID    +  '</p>'+
            '<p>' + option[22].cantidad     +  '</p>'+
            '<p>' + option[22].precio       +  '</p>'+
            '<p>' + option[22].En_Venta     +   '</p>'+
            '<br>'+
            '<p>' + option[22].caracteristicas +  '</p>'+
        '</div>' +
              
        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/images-modified.png?raw=true" class="img" style="width: 130px;">' +
            '<p>' + option[23].ID_productos +  '</p>'+
            '<p>' + option[23].option_ID    +  '</p>'+
            '<p>' + option[23].cantidad     +  '</p>'+
            '<p>' + option[23].precio       +  '</p>'+
            '<p>' + option[23].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[23].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/descarga-modified.png?raw=true" class="img" style="width: 170px;">' +
            '<p>' + option[24].ID_productos +  '</p>'+
            '<p>' + option[24].option_ID    +  '</p>'+
            '<p>' + option[24].cantidad     +  '</p>'+
            '<p>' + option[24].precio       +  '</p>'+
            '<p>' + option[24].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[24].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/images%20(1)-modified.png?raw=true" class="img" style="width: 140px;">' +
            '<p>' + option[25].ID_productos +  '</p>'+
            '<p>' + option[25].option_ID    +  '</p>'+
            '<p>' + option[25].cantidad     +  '</p>'+
            '<p>' + option[25].precio       +  '</p>'+
            '<p>' + option[25].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[25].caracteristicas +  '</p>'+
        '</div>' +

        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/61R7qKHrTQL._AC_SX679_-modified.png?raw=true" class="img" style="width: 100px;">' +
            '<p>' + option[26].ID_productos +  '</p>'+
            '<p>' + option[26].option_ID    +  '</p>'+
            '<p>' + option[26].cantidad     +  '</p>'+
            '<p>' + option[26].precio       +  '</p>'+
            '<p>' + option[26].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[26].caracteristicas +  '</p>'+
        '</div>' +

        
        '<div class="cajas">' +
            '<img src="https://github.com/MariaR17/vector/blob/main/600x400_05_1024x1024-modified.png?raw=true" class="img" style="width: 170px;">' +
            '<p>' + option[27].ID_productos +  '</p>'+
            '<p>' + option[27].option_ID    +  '</p>'+
            '<p>' + option[27].cantidad     +  '</p>'+
            '<p>' + option[27].precio       +  '</p>'+
            '<p>' + option[27].En_Venta     +  '</p>'+
            '<br>'+
            '<p>' + option[27].caracteristicas +  '</p>'+
        '</div>' 
    
ProductO.innerHTML =  title + div; 
}
products();