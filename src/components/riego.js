import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';


const Riego= ({nextStep, prevStep, handleChange, values}) => {
	const Continue = e => {
  		e.preventDefault();
  		nextStep();
	}

	const Previous = e => {
  		e.preventDefault();
  		prevStep();
	}

	return (
		<div>
			<h1> Riego </h1>
			<br/>
			
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Metodo de Riego
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.tipoRiego}
    			onChange={handleChange('tipoRiego')}
    			inputProps={{
      				name: 'tipoRiego',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}></option>
    		<option value='1'>Pivote</option>
    		<option value='2'>Aspersor</option>
    		<option value='3'>Inundación</option>
    		<option value='4'>Goteo</option>
  			</NativeSelect>
  			</FormControl>
  			
  			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Fuente de Agua para Riego
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.fuenteAgua}
    			onChange={handleChange('fuenteAgua')}
    			inputProps={{
      				name: 'fuenteAgua',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}></option>
    		<option value='1'>lago, laguna o estanque natural</option>
    		<option value='2'>Reservorios o Represas externas</option>
    		<option value='3'>Ríos, arroyos o canales</option>
    		<option value='4'>Reservorios, tanques, represas o aguadas internas</option>
    		<option value='5'>Pozo</option>
    		<option value='6'>Red</option>
  			</NativeSelect>
  			</FormControl>

  			<br />
			<br/>

  			<TextField
				id="outlined-number"
				type="number"
				label="% de Superficie Afectado"
				onChange={handleChange('porcentajeRiego')}
				defaultValue={values.porcentajeRiego}
			/>

  			<TextField
				id="outlined-number"
				type="number"
				label="Profundidad de Bombeo (m)"
				onChange={handleChange('profundidadIrrigacion')}
				defaultValue={values.profundidadIrrigacion}
			/>

			<br />
			<br/>

  			<TextField
				id="outlined-number"
				type="number"
				label="Distancia horizontal de la irrigacion en el cultivo (m)"
				onChange={handleChange('distanciaRiego')}
				defaultValue={values.distanciaRiego}
			/>

  			<TextField
				id="outlined-number"
				type="number"
				label="Litros de agua utilizados en el riego"
				onChange={handleChange('litrosRiego')}
				defaultValue={values.litrosRiego}
			/>

			<br />
			<br/>
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Fuente de Energía para Riego
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.fuenteEnergiaRiego}
    			onChange={handleChange('fuenteEnergiaRiego')}
    			inputProps={{
      				name: 'fuenteEnergiaRiego',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}></option>
    		<option value='1'>Electricidad</option>
    		<option value='2'>Diesel</option>
    		<option value='3'>Gravedad</option>
  			</NativeSelect>
  			</FormControl>
	  			


			<br />
			<br/>
			<Button
		      color="primary"
		      variant="contained"
		      onClick={ Previous }
		    >Volver</Button>

			<Button
		      color="primary"
		      variant="contained"
		      onClick={ Continue }
		    >Siguiente</Button>
		</div>

		)
}

export default Riego