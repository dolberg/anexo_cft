import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';


const Forestal = ({nextStep, prevStep, handleChange, values}) => {
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
			<h1> Caracterización de la Masa Forestal </h1>
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Clasficación Arborea Predominante
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.clasificacionArboles}
    			onChange={handleChange('clasificacionArboles')}
    			inputProps={{
      				name: 'clasificacionArboles',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}></option>
    		<option value='5'>Coníferas</option>
    		<option value='6'>Árboles de Madera Dura (ej, Eucalyptus, Roble, Alamo)</option>
  			</NativeSelect>
  			</FormControl>

			<h2> Año Anterior </h2>

			<TextField
  				id="outlined-number"
  				type="number"
  				placeholder="DAP"
  				label="Diámetro a la altura del Pecho (cm)"
  				onChange={handleChange('dapAnterior')}
  				defaultValue={values.dapAnterior}
			/>

			<TextField
  				id="outlined-number"
  				type="number"
  				placeholder="Densidad"
  				label="Densidad (pl/ha)"
  				onChange={handleChange('densidadAnterior')}
  				defaultValue={values.densidadAnterior}
			/>

			<h2> Actual </h2>

			<TextField
  				id="outlined-number"
  				type="number"
  				placeholder="DAP"
  				label="Diámetro a la altura del Pecho (cm)"
  				onChange={handleChange('dapActual')}
  				defaultValue={values.dapActual}
			/>

			<TextField
  				id="outlined-number"
  				type="number"
  				placeholder="Densidad"
  				label="Densidad (pl/ha)"
  				onChange={handleChange('densidadActual')}
  				defaultValue={values.densidadActual}
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

export default Forestal