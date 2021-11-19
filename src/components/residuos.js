import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    		<option value='1'>Removidos y Dejados sin tratar en Montones o Pozos</option>
    		<option value='2'>Removidos con Aireacón no Forzada</option>
    		<option value='3'>Compostado y Removido/ Aireación Forzada</option>
    		<option value='4'>Dejado en el lote/ Incorporado o como cobertura</option>
    		<option value='5'>Quemado</option>
    		<option value='6'>Retirado del Establecimiento</option>
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

export default Residuos