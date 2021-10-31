import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
			<TextField
  				placeholder="Lote"
  				label="Lote"
  				onChange={handleChange('lote')}
  				defaultValue={values.lote}
			/>
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