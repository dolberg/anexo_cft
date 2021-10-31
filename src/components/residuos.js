import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';


const Residuos= ({nextStep, prevStep, handleChange, values}) => {
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
			<h1> Manejo de Residuos de Cultivo </h1>
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Tratamiento de Rastrojos
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.tratamientoRastrojos}
    			onChange={handleChange('tratamientoRastrojos')}
    			inputProps={{
      				name: 'tratamientoRastrojos',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}></option>
    		<option value={'Removidos sin cambio'}>Removidos y Dejados sin tratar en Montones o Pozos</option>
    		<option value={'Removidos Aireados sin forzar'}>Removidos con Aireacón no Forzada</option>
    		<option value={'compostado y removido-aireacion forzosa'}>Compostado y Removido/ Aireación Forzada</option>
    		<option value={'Compostado'}>Compostado</option>
    		<option value={'en el lote'}>Dejado en el lote/ Incorporado o como cobertura</option>
    		<option value={'quemado'}>Quemado</option>
    		<option value={'retirado del establecimiento'}>Retirado del Establecimiento</option>
  			</NativeSelect>
  			</FormControl>

  			<TextField
  				
  				label="Comentarios"
  				onChange={handleChange('comentariosRastrojos')}
  				defaultValue={values.comentariosRastrojos}
			/>


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

export default Residuos