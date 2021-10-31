import React from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';

const Suelo = ({nextStep, prevStep, handleChange, values}) => {
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
			<h1> Caracterización del suelo </h1>

			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Contenido de M.O.
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.materiaOrganica}
    			onChange={handleChange('materiaOrganica')}
    			inputProps={{
      				name: 'materiaOrganica',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}> Seleccione el Contenido de Materia Organica del Suelo</option>
    		<option value={'bajo'}>Bajo (menor a 1,72%)</option>
    		<option value={'medio'}>Medio (entre 1,72 y 5,16%)</option>
    		<option value={'alto'}>Alto (entre 5,16 y 10,32%)</option>
    		<option value={'muy alto'}>Muy Alto (mayor a 10,32%)</option>
  			</NativeSelect>
			<br />
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			Caracterización Hídrica del suelo
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.humedad}
    			onChange={handleChange('humedad')}
    			inputProps={{
      				name: 'humedad',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}> Seleccione el tipo de suelo según sus características hídricas</option>
    		<option value={'humedo'}>Húmedo (no posee limitantes severas de humedad durante el ciclo del cultivo)</option>
    		<option value={'seco'}>Seco (con déficit hídrico durante una parte significativa del ciclo de cultivo)</option>
  			</NativeSelect>
			<br />
			<InputLabel variant="standard" htmlFor="uncontrolled-native">
    			pH del Suelo
  			</InputLabel>
  			<NativeSelect
    			defaultValue={values.pH}
    			onChange={handleChange('pH')}
    			inputProps={{
      				name: 'pH',
      				id: 'uncontrolled-native',
    			}}
  			>
  			<option value={''}> Seleccione el pH del Suelo</option>
    		<option value={'alcalino'}>Alcalino (mayor a 8,5)</option>
    		<option value={'levemente alcalino'}>Levemente Alcalino (entre 7,3 y 8,5)</option>
    		<option value={'levemente acido'}>Levemente Ácido (entre 5,5 y 7,3)</option>
    		<option value={'acido'}>Ácido (menor a 5,5)</option>(
  			</NativeSelect>
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

export default Suelo