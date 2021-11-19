import React from 'react'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const Final = ({nextStep, prevStep, values}) => {
	const Previous = e => {
  		e.preventDefault();
  		prevStep();
	}

	const handlePrint = (event) => {
  		event.preventDefault();
  		var http=new XMLHttpRequest();
  		http.onreadystatechange = function (){
  			if (this.readyState == 4 && this.status == 200){
  				var valorConsulta = JSON.parse(this.response)
  				var formNumber= valorConsulta.Id
  				var formulario = document.getElementById('form')
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
  			}
  		}
  		var tabla=document.getElementById('form')
  		var newWin=window.open("");
  		newWin.document.write(tabla.outerHTML)
  		newWin.print();
  		newWin.close();
	};

	return (
		<div>
		<div id="form">
		
          	<h2> Datos de Identificación </h2>
          	<table>
          		<tbody>
          			<td>Razón Social:</td>
          			<td>{values.razonSocial}</td>
          			<tr/>
          			<td>Establecimiento:</td>
          			<td>{values.establecimiento}</td>
          		</tbody>
          	</table>
          		
			<Divider variant="middle" />

			<h2> Caracterización del suelo </h2>
			<table>
          		<tbody>
			
          			<td>Contenido de Materia Orgánica:</td>
          			<td>{values.materiaOrganica}</td>
          			<tr/>
          			<td>Caracterización Hídrica del suelo:</td>
          			<td>{values.humedad}</td>
          			<tr/>
          			<td>pH del Suelo:</td>
          			<td>{values.pH}</td>
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
          			<td>{values.cambioUso}</td>
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
          			<td>{values.cambioLabranza}</td>
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
          			<td>{values.cambioCoberturas}</td>
          			<td>{values.tiempoCambioCoberturas} años</td>
          			<td>{values.porcentajeCambioCoberturas}%</td>
          		</tbody>
          	</table>

          	 <Divider variant="middle" />

          	<h2> Manejo de Residuos de Cultivo </h2>
          	<table>
          		<tbody>
          			<td>{values.tratamientoRastrojos}</td>
          			<td>{values.comentariosRastrojos}</td>
          		</tbody>
          	</table>

          	<Divider variant="middle" />

          	<h2> Caracterización de la Masa Forestal </h2>

          	<table>
          		<tbody>
          			<td>Clasficación Arborea Predominante</td>
          			<td>{values.clasificacionArboles}</td>
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