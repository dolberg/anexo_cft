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
	if(values.clima===1){
		if(values.humedad===1){
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
    						<option value='1'>Bosque a Pradera</option>
    						<option value='5'>Bosque a Tierra de Cultivo</option>
    						<option value='9'>Pradera a Bosque</option>
    						<option value='13'>Pradera a Tierra de Cultivo</option>
    						<option value='17'>Tierra de Cultivo a Bosque</option>
    						<option value='21'>Tierra de Cultivo a Bosque</option>
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
  							<option value='25'>Siembra Directa a Labranza Reducida</option>
  							<option value='29'>Siembra Directa a Labranza Convencional</option>
  							<option value='33'>Labranza Reducida a Siembra Directa</option>
  							<option value='37'>Labranza Reducida a Labranza Convencional</option>
  							<option value='41'>Labranza Convencional a Siembra Directa</option>
    						<option value='45'>Labranza Convencional a Labranza Reducida</option>
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
    						<option value='49'>Comienza a Usar</option>
    						<option value='53'>Deja de Usar</option>
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
		}else{
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
    						<option value='2'>Bosque a Pradera</option>
    						<option value='6'>Bosque a Tierra de Cultivo</option>
    						<option value='10'>Pradera a Bosque</option>
    						<option value='14'>Pradera a Tierra de Cultivo</option>
    						<option value='18'>Tierra de Cultivo a Bosque</option>
    						<option value='22'>Tierra de Cultivo a Bosque</option>
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
  							<option value='26'>Siembra Directa a Labranza Reducida</option>
  							<option value='30'>Siembra Directa a Labranza Convencional</option>
  							<option value='34'>Labranza Reducida a Siembra Directa</option>
  							<option value='38'>Labranza Reducida a Labranza Convencional</option>
  							<option value='42'>Labranza Convencional a Siembra Directa</option>
    						<option value='46'>Labranza Convencional a Labranza Reducida</option>
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
    						<option value='50'>Comienza a Usar</option>
    						<option value='54'>Deja de Usar</option>
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
	}else{
		if(values.humedad===1){
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
    						<option value='3'>Bosque a Pradera</option>
    						<option value='7'>Bosque a Tierra de Cultivo</option>
    						<option value='11'>Pradera a Bosque</option>
    						<option value='15'>Pradera a Tierra de Cultivo</option>
    						<option value='19'>Tierra de Cultivo a Bosque</option>
    						<option value='23'>Tierra de Cultivo a Bosque</option>
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
  							<option value='27'>Siembra Directa a Labranza Reducida</option>
  							<option value='31'>Siembra Directa a Labranza Convencional</option>
  							<option value='35'>Labranza Reducida a Siembra Directa</option>
  							<option value='39'>Labranza Reducida a Labranza Convencional</option>
  							<option value='43'>Labranza Convencional a Siembra Directa</option>
    						<option value='47'>Labranza Convencional a Labranza Reducida</option>
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
    						<option value='51'>Comienza a Usar</option>
    						<option value='55'>Deja de Usar</option>
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
		}else{
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
    						<option value='4'>Bosque a Pradera</option>
    						<option value='8'>Bosque a Tierra de Cultivo</option>
    						<option value='12'>Pradera a Bosque</option>
    						<option value='16'>Pradera a Tierra de Cultivo</option>
    						<option value='20'>Tierra de Cultivo a Bosque</option>
    						<option value='24'>Tierra de Cultivo a Bosque</option>
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
  							<option value='28'>Siembra Directa a Labranza Reducida</option>
  							<option value='32'>Siembra Directa a Labranza Convencional</option>
  							<option value='36'>Labranza Reducida a Siembra Directa</option>
  							<option value='40'>Labranza Reducida a Labranza Convencional</option>
  							<option value='44'>Labranza Convencional a Siembra Directa</option>
    						<option value='48'>Labranza Convencional a Labranza Reducida</option>
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
    						<option value='52'>Comienza a Usar</option>
    						<option value='56'>Deja de Usar</option>
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
	}
}

export default Productivo