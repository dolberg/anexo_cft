import React, { Component } from 'react';
import Identificacion from './identificacion';
import Suelo from './suelo';
import Productivo from './productivo';
import Residuos from './residuos';
import Forestal from './forestal';
import Final from './final';

export default class Formulario extends Component{
	state = {
    	step: 1,
    	razonSocial: '',
    	establecimiento: '',
    	materiaOrganica: '',
    	humedad: '',
    	pH: '',
    	cambioUso: '',
    	tiempoCambioUso: '',
    	porcentajeCambioUso: '',
    	cambioLabranza: '',
    	tiempoCambioLabranza: '',
    	porcentajeCambioLabranza: '',
    	cambioCoberturas: '',
    	tiempoCambioCoberturas:'',
    	porcentajeCambioCoberturas: '',
    	tratamientoRastrojos: '',
    	comentariosRastrojos: '',
    	clasificacionArboles: '',
    	dapAnterior: '',
    	densidadAnterior: '',
    	dapActual: '',
    	densidadActual: ''
	};

	// go back to previous step
	prevStep = () => {
  		const { step } = this.state;
  		this.setState({ step: step - 1 });
	}

	// proceed to the next step
	nextStep = () => {
  		const { step } = this.state;
  		this.setState({ step: step + 1 });
	}

	// handle field change
	handleChange = input => e => {
  		this.setState({ [input]: e.target.value });
	}

	render() {
		const { step } = this.state;
		const { razonSocial, establecimiento, materiaOrganica, humedad, pH, cambioUso, tiempoCambioUso, porcentajeCambioUso, cambioLabranza, tiempoCambioLabranza, porcentajeCambioLabranza, cambioCoberturas, tiempoCambioCoberturas, porcentajeCambioCoberturas, tratamientoRastrojos, comentariosRastrojos, clasificacionArboles, dapAnterior, densidadAnterior, dapActual, densidadActual} = this.state;
		const values = { razonSocial, establecimiento, materiaOrganica, humedad, pH, cambioUso, tiempoCambioUso, porcentajeCambioUso, cambioLabranza, tiempoCambioLabranza, porcentajeCambioLabranza, cambioCoberturas, tiempoCambioCoberturas, porcentajeCambioCoberturas, tratamientoRastrojos, comentariosRastrojos, clasificacionArboles, dapAnterior, densidadAnterior, dapActual, densidadActual} 
	
		switch (step) {
  			case 1: 
    			return (
      				<Identificacion 
      				nextStep={this.nextStep}
            		handleChange={this.handleChange}
            		values={values}
      				/>
    			)
  			case 2: 
    			return (
      				<Suelo 
      				nextStep={this.nextStep}
      				prevStep={this.prevStep}
            		handleChange={this.handleChange}
            		values={values}
      				/>
    			)
  			case 3: 
    			return (
      				<Productivo 
      				nextStep={this.nextStep}
      				prevStep={this.prevStep}
            		handleChange={this.handleChange}
            		values={values}
      				/>
    			)
  			case 4:
    			return (
      				<Residuos 
      				nextStep={this.nextStep}
      				prevStep={this.prevStep}
            		handleChange={this.handleChange}
            		values={values}
      				/>
      			)
      		case 5:
    			return (
      				<Forestal 
      				nextStep={this.nextStep}
      				prevStep={this.prevStep}
            		handleChange={this.handleChange}
            		values={values}
      				/>
      			)
      		case 6:
    			return (
      				<Final 
      				nextStep={this.nextStep}
      				prevStep={this.prevStep}
            		values={values}
      				/>
      			)
  			// never forget the default case, otherwise VS code would be mad!
  		default: 
     		// do nothing
		}

	}
}