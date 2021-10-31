import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';


const Final = ({nextStep, prevStep, values}) => {
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
          			<tr/>
          			<td>Lote:</td>
          			<td>{values.lote}</td>
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