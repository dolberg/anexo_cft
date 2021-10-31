import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';

const Productivo = ({nextStep, prevStep, handleChange, values}) => {
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
			<h1> Cambios en el Sistema Productivo </h1>
			<h2> Cambio del uso del suelo </h2>
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Cambio
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.cambioUso}
    			onChange={handleChange('cambioUso')}
    			inputProps={{
      				name: 'cambioUso',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}> Seleccione el Cambio en el Uso del Suelo</option>
    		<option value={'sin cambio'}>Sin Cambios</option>
    		<option value={'bosque a pradera'}>Bosque a Praderas o Pasturas</option>
    		<option value={'pradera a bosque'}>Pradera o Pastura a Bosque</option>
    		<option value={'bosque a cultivo'}>Bosque a Tierra de Cultivo</option>
    		<option value={'cultivo a Bosque'}>Tierra de Cultivo a Bosque</option>
  			</NativeSelect>
  			</FormControl>

  			<TextField
  				id="outlined-number"
  				type="number"
  				label="Años Transcurridos"
  				onChange={handleChange('tiempoCambioUso')}
  				defaultValue={values.tiempoCambioUso}
			/>

			<TextField
  				id="outlined-number"
  				type="number"
  				label="% de Superficie Afectado"
  				onChange={handleChange('porcentajeCambioUso')}
  				defaultValue={values.porcentajeCambioUso}
			/>

			<br />
			<br/>

			<h2> Cambio del Sistema de Cultivo </h2>
			<h3> Cambio del Sistema de Labranzas </h3>
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Cambio
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.cambioLabranza}
    			onChange={handleChange('cambioLabranza')}
    			inputProps={{
      				name: 'cambioLabranza',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}> Seleccione el Cambio de Labranzas</option>
    		<option value={'sin cambio'}>Sin Cambios</option>
    		<option value={'convencional a reducida'}>Labranza Convencional a Labranza Reducida</option>
    		<option value={'convenvional a directa'}>Labranza Convencional a Siembra Directa</option>
    		<option value={'reducida a convencional'}>Labranza Reducida a Labranza Convencional</option>
    		<option value={'reducida a directa'}>Labranza Reducida a Siembra Directa</option>
    		<option value={'directa a convencional'}>Siembra Directa a Labranza Convencional</option>
    		<option value={'directa a reducida'}>Siembra Directa a Labranza Reducida</option>
  			</NativeSelect>
  			</FormControl>

  			<TextField
  				id="outlined-number"
  				type="number"
  				label="Años Transcurridos"
  				onChange={handleChange('tiempoCambioLabranza')}
  				defaultValue={values.tiempoCambioLabranza}
			/>

			<TextField
  				id="outlined-number"
  				type="number"
  				label="% de Superficie Afectado"
  				onChange={handleChange('porcentajeCambioLabranza')}
  				defaultValue={values.porcentajeCambioLabranza}
			/>

			<br />

			<h3> Uso de Cultivos de Cobertura</h3>
			<FormControl>
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Cambio
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.cambioCoberturas}
    			onChange={handleChange('cambioCoberturas')}
    			inputProps={{
      				name: 'cambioCoberturas',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}> Seleccione el Cambio en el Uso de Cultivos de Cobertura</option>
    		<option value={'sin cambio'}>Sin Cambios</option>
    		<option value={'conmienza a usar'}>Comienza a Usar</option>
    		<option value={'deja de usar'}>Deja de Usar</option>
  			</NativeSelect>
  			</FormControl>

  			<TextField
  				id="outlined-number"
  				type="number"
  				label="Años Transcurridos"
  				onChange={handleChange('tiempoCambioCoberturas')}
  				defaultValue={values.tiempoCambioCoberturas}
			/>

			<TextField
  				id="outlined-number"
  				type="number"
  				label="% de Superficie Afectado"
  				onChange={handleChange('porcentajeCambioCoberturas')}
  				defaultValue={values.porcentajeCambioCoberturas}
			/>

			<br />
			<br />

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

export default Productivo