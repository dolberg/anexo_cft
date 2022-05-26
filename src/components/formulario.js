import React, { Component } from 'react';
import Identificacion from './identificacion';
import Suelo from './suelo';
import Productivo from './productivo';
import Residuos from './residuos';
import Forestal from './forestal';
import Final from './final';

export default class Formulario extends Component{
	climate=[
		{
			num: 1,
			value:'templado'
		},
		{
			num: 2,
			value:'tropical'
		}
	]

	mo=[
		{
			num:1,
			value: "MO<=1,72%"
		},
		{
			num:2,
			value:"1,72%<MO<=5,16%"
		},
		{
			num:3,
			value:"5,16%<=10,32%"
		},
		{
			num:4,
			value:"MO>10,32%"
		}

	]

	humedadSuelo=[
		{
			num:1,
			value:"humedo",
		},
		{
			num:2,
			value:"seco"
		}
	]

	pHSuelo=[
		{
			num:1,
			value:"pH<=5,5"
		},
		{
			num:2,
			value:"5,5<pH<=7,3"
		},
		{
			num:3,
			value:"7.3<pH<=8,5"
		},
		{
			num:4,
			value:"ph>8,5"
		}
	]

	cambiosProductivos= [
        {
            num: 1,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 2,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 3,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 4,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 5,
            Category: "land_use",
            FromTo: "Bosque a Cultivable",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 6,
            Category: "land_use",
            FromTo: "Bosque a Cultivable",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 7,
            Category: "land_use",
            FromTo: "Bosque a Cultivable",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 8,
            Category: "land_use",
            FromTo: "Bosque a Cultivable",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 9,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 10,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 11,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 12,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 13,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 14,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 15,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 16,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 17,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 18,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 19,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 20,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 21,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 22,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 23,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 24,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 25,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 26,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 27,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 28,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 29,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 30,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 31,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 32,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 33,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 34,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 35,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 36,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 37,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 38,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 39,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 40,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 41,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 42,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 43,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 44,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 45,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 46,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 47,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 48,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 49,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 50,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 51,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 52,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 53,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            num: 54,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            num: 55,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            num: 56,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            num: 57,
            Category: "organic_input",
            FromTo: "Empieza a incorporar"
        },
        {
            num: 58,
            Category: "organic_input",
            FromTo: "deja de incorporar"
        }
    ]

    manejoResiduos=[
    	{
    		num: 1,
    		value:"Removido, dejado en pilas o pozos"
    	},
    	{
    		num:2,
    		value:"Removido, compostado sin aireación forzada"
    	},
    	{
    		num:3,
    		value:"Removido, compostado con aireación forzada"
    	},
    	{
    		num:4,
    		value:"Dejado en el campo, como cobertura o incorporado"
    	},
    	{
    		num:5,
    		value:"Quemado en el lote"
    	},
    	{
    		num:6,
    		value:"Removido del lote para uso o venta"
    	}
    ]


	tipoArboles=[
		{
			num:'',
			tipo:''
		},
		{
			num:5,
			tipo:"Coníferas"
		},
		{
			num:6,
			tipo:"Árboles de Madera Dura (ej, Eucalyptus, Roble, Alamo)"
		}
	]

	state = {
    	step: 1,
    	razonSocial: '',
    	establecimiento: '',
        distancia:'',
    	clima: '',
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
		const { razonSocial, establecimiento, distancia, clima, materiaOrganica, humedad, pH, cambioUso, tiempoCambioUso, porcentajeCambioUso, cambioLabranza, tiempoCambioLabranza, porcentajeCambioLabranza, cambioCoberturas, tiempoCambioCoberturas, porcentajeCambioCoberturas, tratamientoRastrojos, clasificacionArboles, dapAnterior, densidadAnterior, dapActual, densidadActual} = this.state;
		const values = { razonSocial, establecimiento, distancia, clima, materiaOrganica, humedad, pH, cambioUso, tiempoCambioUso, porcentajeCambioUso, cambioLabranza, tiempoCambioLabranza, porcentajeCambioLabranza, cambioCoberturas, tiempoCambioCoberturas, porcentajeCambioCoberturas, tratamientoRastrojos, clasificacionArboles, dapAnterior, densidadAnterior, dapActual, densidadActual} 
		const climate=this.climate
		const mo=this.mo
		const humedadSuelo=this.humedadSuelo
		const pHSuelo=this.pHSuelo
		const cambiosProductivos=this.cambiosProductivos
		const manejoResiduos=this.manejoResiduos
		const tipoArboles= this.tipoArboles
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
            		tipoArboles= {tipoArboles}
      				/>
      			)
      		case 6:
    			return (
      				<Final 
      				nextStep={this.nextStep}
      				prevStep={this.prevStep}
            		values={values}
            		climate={climate}
            		mo={mo}
            		humedadSuelo={humedadSuelo}
            		pHSuelo={pHSuelo}
            		cambiosProductivos={cambiosProductivos}
            		manejoResiduos={manejoResiduos}
            		tipoArboles={tipoArboles}
      				/>
      			)
  			// never forget the default case, otherwise VS code would be mad!
  		default: 
     		// do nothing
		}

	}
}