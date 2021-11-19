import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';


const Identificacion = ({nextStep, handleChange, values}) => {

	const Continue = e => {
  		e.preventDefault();
  		nextStep();
	}
	return (
		<div>
			<h1> Datos de Identificación </h1>

			<TextField
  				placeholder="Razón Social del Productor"
  				label="Razon Social"
  				onChange={handleChange('razonSocial')}
  				defaultValue={values.razonSocial}
			/>
			<br />
			<TextField
  				placeholder="Establecimiento"
  				label="Establecimiento"
  				onChange={handleChange('establecimiento')}
  				defaultValue={values.establecimiento}
			/>
			<br />
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Clima
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.clima}
    			onChange={handleChange('clima')}
    			inputProps={{
      				name: 'clima',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}></option>
    		<option value='1'>Templado</option>
    		<option value='2'>Tropical</option>
  			</NativeSelect>
  			</FormControl>
			<br />
			<br />
			<Button
              color="primary"
              variant="contained"
              onClick={ Continue }
            >Siguiente</Button>
			
		</div>
	)
}

export default Identificacion