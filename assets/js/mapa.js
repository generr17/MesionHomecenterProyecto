var conImgClic = 0;
//Posicion, zoom, maxzoom, minzoom, negar el mover mapa, negar los botones de zoom
const options = {
    center : [-1.2614731,-78.6142738],
    zoom : 13,
    minZoom: 13,
    maxZoom: 16.5
    //dragging: false,
    //zoomControl: false
}
//---------------------------------------
//Instanciamos el mapa
let map = L.map('map', options);
let tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
//--------------------
//Propiedades del mapa
map.addLayer(tileLayer);
//map.touchZoom.disable();
//map.doubleClickZoom.disable();
//map.scrollWheelZoom.disable();
//map.boxZoom.disable();
//map.keyboard.disable();
//-------------------------

//Coordenadas y titulos para marcadores de mapa
var markers = [
["<center><b>Meison HomeCenter</b></center> <br> <b>Dirección:</b> Victor Hugo y Batalla del pichincha <br> <b>Celular:</b> 0980582796 <br><br><div class=text-center><button onclick=volverMapa() class=btnEnviar style=background-color: #1976CB;color: white;>Volver</button></div>", -1.260898,-78.6149427]
];
//------------------------------------------
//Funcion volver mapa
function volverMapa(){
    map.closePopup();
    map.flyTo([-1.2614731,-78.6142738], 13);
}
//-------------------
//Agregar marcadores al mapa
var marker = [];
for (var i = 0; i < markers.length; i++) {
marker[i] = new L.marker([markers[i][1],markers[i][2]])
    .bindPopup(markers[i][0])
    .addTo(map)
    .on('click', onClick);
}
//---------------------------
//Funcion Control de click en marcador
function onClick(e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    if (lat === markers[0][1] && lng === markers[0][2]) {
    //matriz
    map.flyTo([-1.260898,-78.6149427], 16.5);
    }
}
//------------------------------------

/*Funcion Control de cierre de popup
function onClose(){
    if (conImgClic === 0) {
    map.flyTo([-1.2495394,-78.6253654], 13);
    } else {
    conImgClic = 0;
    }
}
//-----------------------------------*/

//Cuando se hace click en el mapa
map.on('click', onMapClick);

function onMapClick(e) {
    map.flyTo([-1.2614731,-78.6142738], 13);
}
//--------------------------------

//Funcion control de click en imagenes
function abrirUbicacion(num){
    if(num === 0){
    //matriz
    map.flyTo([-1.260898,-78.6149427], 16.5);
    marker[0].openPopup();
    }
}
//-----------------------------------