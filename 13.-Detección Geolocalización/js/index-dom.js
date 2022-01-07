import getGeolocation from "./deteccion-geolocalizacion.js";



const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
  getGeolocation("geolocation");
});
