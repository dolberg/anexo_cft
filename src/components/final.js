import React from 'react'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const Final = ({nextStep, prevStep, values, climate, mo, humedadSuelo, pHSuelo, cambiosProductivos, manejoResiduos, tipoArboles}) => {
	const Previous = e => {
  		e.preventDefault();
  		prevStep();
	}

	const handlePrint = (event) => {
  		event.preventDefault();
  		var tabla=document.getElementById('form')
  		var newWin=window.open("");
  		newWin.document.write(tabla.outerHTML)
  		newWin.print();
  		newWin.close();
	};
	var caracterizacionClima='';
	var caracterizacionMo='';
	var caracterizacionHumedadSuelo='';
	var caracterizacionPHSuelo='';
	var cambiosUsoDeLaTierra='';
	var cambioSistemaLabraznas='';
	var cambioUsoCoberturas='';
	var caracterizacionManejoResiduos='';
	var arbol='';

	for (var a=0; a< climate.length; a++){
		if (climate[a].num == values.clima){
			caracterizacionClima=climate[a].value
		}
	}

	for (var b=0; b< mo.length; b++){
		if (mo[b].num == values.materiaOrganica){
			caracterizacionMo=mo[b].value
		}
	}

	for (var c=0; c< humedadSuelo.length; c++){
		if (humedadSuelo[c].num == values.humedad){
			caracterizacionHumedadSuelo=humedadSuelo[c].value
		}
	}

	for (var d=0; d< pHSuelo.length; d++){
		if (pHSuelo[d].num == values.pH){
			caracterizacionPHSuelo=pHSuelo[d].value
		}
	}

	for (var e=0; e< cambiosProductivos.length; e++){
		if (cambiosProductivos[e].num == values.cambioUso){
			cambiosUsoDeLaTierra=cambiosProductivos[e].FromTo
		}
	}

	for (var f=0; f< cambiosProductivos.length; f++){
		if (cambiosProductivos[f].num == values.cambioLabranza){
			cambioSistemaLabraznas=cambiosProductivos[f].FromTo
		}
	}

	for (var g=0; g< cambiosProductivos.length; g++){
		if (cambiosProductivos[g].num == values.cambioCoberturas){
			cambioUsoCoberturas=cambiosProductivos[g].FromTo
		}
	}

	for (var h=0; h< manejoResiduos.length; h++){
		if (manejoResiduos[h].num == values.tratamientoRastrojos){
			caracterizacionManejoResiduos=manejoResiduos[h].value
		}
	}

	for (var i=0; i< tipoArboles.length; i++){
		if (tipoArboles[i].num == values.clasificacionArboles){
			arbol=tipoArboles[i].tipo
		}
	}

	return (
		<div>
		<div id="form">
						<div id="number"></div>
		
          	<h2> Datos de Identificación </h2>
          	<table>
          		<tbody>
          			<td>Razón Social:</td>
          			<td>{values.razonSocial}</td>
          			<tr/>
          			<td>Establecimiento:</td>
          			<td>{values.establecimiento}</td>
          			<tr/>
          			<td>Distancia al Puerto:</td>
          			<td>{values.distancia} km</td>
          			<tr/>
          			<td>Clima:</td>
          			<td>{caracterizacionClima}</td>
          		</tbody>
          	</table>
          		
			<Divider variant="middle" />

			<h2> Caracterización del suelo </h2>
			<table>
          		<tbody>
			
          			<td>Contenido de Materia Orgánica:</td>
          			<td>{caracterizacionMo}</td>
          			<tr/>
          			<td>Caracterización Hídrica del suelo:</td>
          			<td>{caracterizacionHumedadSuelo}</td>
          			<tr/>
          			<td>pH del Suelo:</td>
          			<td>{caracterizacionPHSuelo}</td>
          		</tbody>
          	</table>
          		
			<Divider variant="middle" />

			<h2> Cambios en el Sistema Productivo </h2>
			<h3> Cambio del uso del suelo </h3>
			<table>
          		<thead>
					<th></th>
					<th>Tiempo Transcurrido</th>
					<th> Porcentaje afectado</th>
				</thead>
				<tbody>
          			<td>{cambiosUsoDeLaTierra}</td>
          			<td>{values.tiempoCambioUso} años</td>
          			<td>{values.porcentajeCambioUso}%</td>
          		</tbody>
          	</table>

          	<h3> Cambio del Sistema de Cultivo </h3>
			<h4> Cambio del Sistema de Labranzas </h4>
			<table>
          		<thead>
					<th></th>
					<th>Tiempo Transcurrido</th>
					<th> Porcentaje afectado</th>
				</thead>
				<tbody>
          			<td>{cambioSistemaLabraznas}</td>
          			<td>{values.tiempoCambioLabranza} años</td>
          			<td>{values.porcentajeCambioLabranza}%</td>
          		</tbody>
          	</table>

          	<h4> Cambio del Sistema de Labranzas</h4>
          	<table>
          		<thead>
					<th></th>
					<th>Tiempo Transcurrido</th>
					<th> Porcentaje afectado</th>
				</thead>
				<tbody>
          			<td>{cambioUsoCoberturas}</td>
          			<td>{values.tiempoCambioCoberturas} años</td>
          			<td>{values.porcentajeCambioCoberturas}%</td>
          		</tbody>
          	</table>

          	 <Divider variant="middle" />

          	<h2> Manejo de Residuos de Cultivo </h2>
          	<table>
          		<tbody>
          			<td>{caracterizacionManejoResiduos}</td>
          			<td>{values.comentariosRastrojos}</td>
          		</tbody>
          	</table>

          	<Divider variant="middle" />

          	<h2> Caracterización de la Masa Forestal </h2>

          	<table>
          		<tbody>
          			<td>Clasficación Arborea Predominante</td>
          			<td>{arbol}</td>
          		</tbody>
          	</table>

          	<h3>Año Anterior</h3>
          	<table>
          		<thead>
          			<th>Diámetro a la altura del pecho</th>
					<th>Densidad</th>
				</thead>
				<tbody>
          			<td>{values.dapAnterior} cm</td>
          			<td>{values.densidadAnterior} pl/ha</td>
          		</tbody>
          	</table>

          	<h3>Actual</h3>
          	<table>
          		<thead>
          			<th>Diámetro a la altura del pecho</th>
					<th>Densidad</th>
				</thead>
				<tbody>
          			<td>{values.dapActual} cm</td>
          			<td>{values.densidadActual} pl/ha</td>
          		</tbody>
          	</table>
        </div>

        	<Button
              color="primary"
              variant="contained"
              onClick={ Previous }
            >Volver</Button>

          	<Button
            	color="primary"
            	variant="contained"
            	onClick={ handlePrint }
        	>Imprimir</Button>

		</div>

		
	)
}

export default Final