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
  		var formData= new FormData();
			formData.append('razonSocial', values.razonSocial)
			formData.append('establecimiento', values.establecimiento)
			formData.append('distancia', values.distancia)
			formData.append('clima', values.clima)
			formData.append('materiaOrganica', values.materiaOrganica)
			formData.append('humedad', values.humedad)
			formData.append('pH', values.pH)
			formData.append('cambioUso', values.cambioUso)
			formData.append('tiempoCambioUso', values.tiempoCambioUso)
			formData.append('porcentajeCambioUso', values.porcentajeCambioUso)
			formData.append('cambioLabranza', values.cambioLabranza)
			formData.append('tiempoCambioLabranza', values.tiempoCambioLabranza)
			formData.append('porcentajeCambioLabranza', values.porcentajeCambioLabranza)
			formData.append('cambioCoberturas', values.cambioCoberturas)
			formData.append('tiempoCambioCoberturas', values.tiempoCambioCoberturas)
			formData.append('porcentajeCambioCoberturas', values.porcentajeCambioCoberturas)
			formData.append('tratamientoRastrojos', values.tratamientoRastrojos)
			formData.append('clasificacionArboles', values.clasificacionArboles)
			formData.append('dapAnterior', values.dapAnterior)
			formData.append('densidadAnterior', values.densidadAnterior)
			formData.append('dapActual', values.dapActual)
			formData.append('densidadActual', values.densidadActual)
  		var http=new XMLHttpRequest();
  		http.onreadystatechange = function (){
  			if (this.readyState === 4 && this.status === 200){
  				var valorConsulta = JSON.parse(this.response)
  				var formNumber= valorConsulta.data.id
  				var number = document.getElementById('number')
  				var table = document.createElement('table')
  				var tbody = document.createElement('tbody')
  				var espacioTitulo= document.createElement('td')
  				var infoTitulo=document.createTextNode("N° formulario:")
  				espacioTitulo.appendChild(infoTitulo)
  				tbody.appendChild(espacioTitulo)
  				var espacionumero= document.createElement('td')
  				var ifonumero= document.createTextNode(formNumber)
  				espacionumero.appendChild(ifonumero)
  				tbody.appendChild(espacionumero)
  				table.appendChild(tbody)
  				number.appendChild(table)
  				var tabla=document.getElementById('form')
  				var newWin=window.open("");
  				newWin.document.write(tabla.outerHTML)
  				newWin.print();
  				newWin.close();
  			}
  		}
  		http.open('POST', 'http://127.0.0.1:5000/formularios-cft', true)
  		http.setRequestHeader('Contemt-type', 'form-data')
  		http.send(formData)
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

	for (let i=0; i< climate.length; i++){
		if (climate[i].id = values.clima){
			caracterizacionClima=climate[i].value
		}
	}

	for (let i=0; i< mo.length; i++){
		if (mo[i].id = values.materiaOrganica){
			caracterizacionMo=mo[i].value
		}
	}

	for (let i=0; i< humedadSuelo.length; i++){
		if (humedadSuelo[i].id = values.humedad){
			caracterizacionHumedadSuelo=humedadSuelo[i].value
		}
	}

	for (let i=0; i< pHSuelo.length; i++){
		if (pHSuelo[i].id = values.pH){
			caracterizacionPHSuelo=pHSuelo[i].value
		}
	}

	for (let i=0; i< cambiosProductivos.length; i++){
		if (cambiosProductivos[i].ID = values.cambioUso){
			cambiosUsoDeLaTierra=cambiosProductivos[i].value
		}
	}

	for (let i=0; i< cambiosProductivos.length; i++){
		if (cambiosProductivos[i].ID = values.cambioLabranza){
			cambioSistemaLabraznas=cambiosProductivos[i].value
		}
	}

	for (let i=0; i< cambiosProductivos.length; i++){
		if (cambiosProductivos[i].ID = values.cambioCoberturas){
			cambioUsoCoberturas=cambiosProductivos[i].value
		}
	}

	for (let i=0; i< manejoResiduos.length; i++){
		if (manejoResiduos[i].id = values.tratamientoRastrojos){
			caracterizacionManejoResiduos=manejoResiduos[i].value
		}
	}

	for (let i=0; i< tipoArboles.length; i++){
		if (tipoArboles[i].id = values.clasificacionArboles){
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