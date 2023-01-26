import JSZip from 'jszip'
import L from 'leaflet';
import GIBSLeaflet from 'gibs-leaflet';
import BoundaryCanvas from 'leaflet-boundary-canvas'
import * as WMS from 'leaflet.wms'
//import * as groupedLayers from 'leaflet-groupedlayercontrol'
import tokml from "tokml"
import "file-saver"
import { LeafletDraw } from 'leaflet-draw'
import circleToPolygon from 'circle-to-polygon'

/*
 * L.Control.WMSLegend is used to add a WMS Legend to the map
 */

L.Control.WMSLegend = L.Control.extend({
    options: {
        position: 'topleft',
        uri: '',
        
    },

    onAdd: function () {
        var controlClassName = 'leaflet-control-wms-legend',
            legendClassName = 'wms-legend',
            stop = L.DomEvent.stopPropagation;
        this.container = L.DomUtil.create('div', controlClassName);
        this.img = L.DomUtil.create('img', legendClassName, this.container);
        this.img.src = this.options.uri;
        this.img.alt = 'Legend';

        L.DomEvent
            .on(this.img, 'click', this._click, this)
            .on(this.container, 'click', this._click, this)
            .on(this.img, 'mousedown', stop)
            .on(this.img, 'dblclick', stop)
            .on(this.img, 'click', L.DomEvent.preventDefault)
            .on(this.img, 'click', stop);
        this.height = null;
        this.width = null;
        return this.container;
    },
    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        // toggle legend visibility
        var style = window.getComputedStyle(this.img);
        if (style.display === 'none') {
            this.container.style.height = this.height + 'px';
            this.container.style.width = this.width + 'px';
            this.img.style.display = this.displayStyle;
        }
        else {
            if (this.width === null && this.height === null) {
                // Only do inside the above check to prevent the container
                // growing on successive uses
                this.height = this.container.offsetHeight;
                this.width = this.container.offsetWidth;
            }
            this.displayStyle = this.img.style.display;
            this.img.style.display = 'none';
            this.container.style.height = '20px';
            this.container.style.width = '20px';
        }
    },
});

L.wmsLegend = function (uri) {
    var wmsLegendControl = new L.Control.WMSLegend;
    wmsLegendControl.options.uri = uri;
    map.addControl(wmsLegendControl);
    return wmsLegendControl;
};
//fin wms Legend
var lecturas= document.getElementById("lecturas") 
var perimetro= document.getElementById("perimetro")
//Centro por default del mapa
var center = [-34.600414379623835,-64.39027294716175];

//creación del mapa en el div "map"
var map = L.map('map').setView(center,12);

//creación de la capa base
var baseLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG9sYmVyZyIsImEiOiJjanV6a3k5ZTcxOTd0NDRzZHU2dTMwdmJjIn0.9ur2f2FeKxht-92uhEGJ2g'
})

map.addLayer(baseLayer); 

var vacio
//var urlWMS='http://ec2-54-234-123-86.compute-1.amazonaws.com:8080/geoserver/SDP/wms?service=WMS&'

var urlWMS='http://localhost:8080/geoserver/SDP/wms?service=WMS&'
//creación de capas de comprobación con WMS
var exclusiones = L.tileLayer.wms(urlWMS, {
  layers: 'SDP-qa:exclusion_areas',
  format: 'image/png',
  opacity: 1,
  tyles: '',
  transparent: true,
  attribution: "",
  version: "1.1.1",
  srs: "EPSG:4326"
})
    
var ordenamientoBosquesNativos = L.tileLayer.wms(urlWMS, {
  layers: 'SDP-qa:all_the_territory',
  format: 'image/png',
  opacity: 1,
  tyles: '',
  transparent: true,
  attribution: "",
  version: "1.3.0",
  srs: "EPSG:4326"
})
    
var zonasProtegidas = L.tileLayer.wms(urlWMS, {
  layers: ['SDP-qa:wdpa0','SDP-qa:wdpa1','SDP-qa:wdpa1','SDP-qa:iucn0','SDP-qa:iucn1','SDP-qa:iucn2'],
  format: 'image/png',
  opacity: 1,
  tyles: '',
  transparent: true,
  attribution: "",
  version: "1.3.0",
  srs: "EPSG:3857"
})

var sitiosRamsar = L.tileLayer.wms(urlWMS, {
  layers: 'SDP-qa:ramsar_worldwide',
  format: 'image/png',
  opacity: 1,
  tyles: '',
  transparent: true,
  attribution: "",
  version: "1.3.0",
  srs: "EPSG:3857"
})

var aves = L.tileLayer.wms(urlWMS, {
  layers: ['SDP-qa:aicas', 'SDP-qa:aicas_brasil', 'SDP-qa:aicas_paraguay', 'SDP-qa:ibas_uruguay'],
  format: 'image/png',
  opacity: 1,
  tyles: '',
  transparent: true,
  attribution: "",
  version: "1.3.0",
  srs: "EPSG:3857"
})

//var cropland=L.tileLayer.wms('http://localhost:8080/geoserver/SDP/wms?service=WMS&', {
  //layers: ['SDP-qa:Cropland'],
  //format: 'image/png',
  //opacity: 1,
  //tyles: '',
  //transparent: true,
  //attribution: "",
  //version: "1.3.0",
  //srs: "EPSG:3857"
//})

var  overlayMaps =  {
  "Zonas Excluidas": exclusiones,
  "OTBN": ordenamientoBosquesNativos,
  "Areas Protegidas": zonasProtegidas,
  "Sitios Ramsar": sitiosRamsar,
  //"Areas de Cultivo": cropland,
  "Áreas Importantes para la Conservación de las Aves - AICAS":aves
} 

//Creación de control de capas WMS y cambio en referencias
var layerControl = L.control.layers(vacio, overlayMaps).addTo(map);

map.on('overlayadd', function(e){
  if (e.name == "OTBN"){
    var ref_OTBN=L.wmsLegend(urlWMS+"request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=SDP:all_the_territory&style=OTBN")
  }
})

let getDom = xml => (new DOMParser()).parseFromString(xml, "text/xml")
let getExtension = fileName => fileName.split(".").pop()

let getKmlDom = (kmzFile) => {
  var zip = new JSZip()
  return zip.loadAsync(kmzFile)
    .then(zip => {
      let kmlDom = null
      zip.forEach((relPath, file) => {
        if (getExtension(relPath) === "kml" && kmlDom === null) {
          kmlDom = file.async("string").then(getDom)
        }
      })
      return kmlDom || Promise.reject("No kml file found")
    });
}
var lotes

var lotesControl = L.control.layers(vacio,lotes).addTo(map);

var f = document.getElementById("f")

f.addEventListener("change", e => {
  lotes = {}
  map.removeControl(lotesControl) 
  let geoJson = getKmlDom(e.target.files[0]).then(kmlDom => {
    let geoJsonObject = toGeoJSON.kml(kmlDom)
    geoJsonObject.features.forEach(function(feat){
      var polygon = {
        'type': feat.type,
        'geometry': feat.geometry,
        'properties': feat.properties};
      console.log(JSON.stringify(polygon));
      
      var nombre = feat.properties.name
      var poli = L.geoJson(polygon)
      //poli.bindPopup(feat.properties.name+"</br><br>desmonte:36 ha</br><br>Montes:<input type='text>")
      var center = poli.getBounds().getCenter();
      lotes[nombre] = poli
      map.setView(center)
    })   

  lotesControl = L.control.layers(vacio, lotes).addTo(map);
  
  });
})

var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);


var drawPluginOptions = {
  position: 'topright',
  draw: {
    polygon: true,
    // disable toolbar item by setting it to false
    polyline: false,
    circle: true, // Turns off this drawing tool
    rectangle: false,
    marker: false,
    },
  edit: {
    featureGroup: editableLayers, //REQUIRED!!
    remove: true
  }
};

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw(drawPluginOptions);
map.addControl(drawControl);


var i=1
var exclusionArea=[]
map.on('draw:created', function (e) {
  var type = e.layerType;
  var layer = e.layer;
  var feature = layer.feature = layer.feature || {}; // Initialize feature

  feature.type = feature.type || "Feature"; // Initialize feature.type
  var props = feature.properties = feature.properties || {}; // Initialize feature.properties
  props.name = 'Lote-'+i;
  props.type=null
  //preparar el String para enviar al controller
  var shape 
  //enviar el String al form
  
  if (type== "circle"){
    var circleToPoly = circleToPolygon([layer.getLatLng().lng,layer.getLatLng().lat], layer.getRadius());
    var shape= {"type":"Feature","properties":layer.feature.properties,"geometry":circleToPoly}
    layer=L.geoJson(shape)
    var inter_shape2=JSON.stringify(layer.toGeoJSON());
    inter_shape=JSON.stringify(shape);
    
    
  }else{
    shape = layer.toGeoJSON();
    shape.properties.name='Lote-'+i
    var inter_shape= JSON.stringify(layer.toGeoJSON());
  }
  layer.bindPopup('<select id="- select" name="lenguajes" id="lang"><option value="montes y arboledas">Montes y Arboledas</option></br><option value="parques y edificaciones">Parques y edificaciones</option></br><option value="bajos y zonas anegables">Bajos y Zona Anegables</option></br><option value="otros">Otros</option></select></br><button id="-button" class="button">Guardar</button>');
  layer.setStyle({color:'red'})
  exclusionArea.push(layer)
  editableLayers.addLayer(layer);
  
  i++
});
map.on('popupopen', function(e) {
  lecturas.innerHTML=JSON.stringify(e.popup._source.toGeoJSON().properties.type)
  document.getElementById('-button').onclick = function(){changeType()};
  function changeType(){
    e.popup._source.feature.properties.type=document.getElementById('- select').value
    e.popup._source.setStyle({color:'green'})

    lecturas.innerHTML=JSON.stringify(e.popup._source.toGeoJSON().properties.type)
  }
})
document.getElementById('env').onclick = function(){genPoli()};
function genPoli(){
  
  var kmz = new JSZip
  var multipol=[]
  var n=0
  editableLayers.toGeoJSON().features.forEach(function(feat){
    if (feat.properties.type== null){
      n++}
  })

  if (n==0){
    editableLayers.toGeoJSON().features.forEach(function(feat){
      var data={"geom": feat.geometry,
      "tipo":feat.properties.type}
      var http = new XMLHttpRequest()
      http.open('POST', 'https://sdp.herokuapp.com/excluded_areas_qa', true);
      http.setRequestHeader('Content-Type', 'application/json');
      http.send(JSON.stringify(data));
    })
    map.removeLayer(editableLayers)
  }else{
    lecturas.innerHTML="HAY TIPOS SIN ASIGNAR"}
}


document.getElementById('kt').onclick = function(){genKMZ()};
function genKMZ(){
  
  var kmz = new JSZip
  var multipol=[]
  var n=0
  editableLayers.toGeoJSON().features.forEach(function(feat){
    if (feat.properties.type== null){
      n++}
  })

  if (n==0){
    editableLayers.toGeoJSON().features.forEach(function(feat){
    multipol.push(feat)
  })
    //var fg = L.featureGroup();
      //map.eachLayer(function(layer){
        //fg.addLayer(layer);
      //});
      //map.eachLayer(function(layer) {

      //var id_length=polis_id.length
      //for(var i=0; i<id_length; i++){
        
        //if (layer._leaflet_id==polis_id[i]){
          //fg.getLayer(polis_id[i]).toGeoJSON().features.forEach(function(feat){
          //multipol.push(feat)
          //});
        //}
      //}
    //});

    var multipolygon= {
      "type":"FeatureCollection",
      "features": multipol
    }

    var kmlDoc = tokml(multipolygon, {
        name: 'name',
        documentName: 'descargaKMZ' , 
        simplestyle: true
    });

    kmz.file("doc.kml", kmlDoc)

    kmz.generateAsync({type:"blob"})
        .then(function (blob) {
        saveAs(blob, 'descargaKMZ' +".kmz");
    })
  }else{
    lecturas.innerHTML="HAY TIPOS SIN ASIGNAR"}
}

