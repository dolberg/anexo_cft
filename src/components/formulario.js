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
			id: 1,
			value:'templado'
		},
		{
			id: 2,
			value:'tropical'
		}
	]

	mo=[
		{
			id:1,
			value: "MO<=1,72%"
		},
		{
			id:2,
			value:"1,72%<MO<=5,16%"
		},
		{
			id:3,
			value:"5,16%<=10,32%"
		},
		{
			id:4,
			value:"MO>10,32%"
		}

	]

	humedadSuelo=[
		{
			id:1,
			value:"humedo",
		},
		{
			id:2,
			value:"seco"
		}
	]

	pHSuelo=[
		{
			id:1,
			value:"pH<=5,5"
		},
		{
			id:2,
			value:"5,5<pH<=7,3"
		},
		{
			id:3,
			value:"7.3<pH<=8,5"
		},
		{
			id:4,
			value:"ph>8,5"
		}
	]

	cambiosProductivos= [
        {
            ID: 1,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 2,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 3,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 4,
            Category: "land_use",
            FromTo: "Bosque a Pradera",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 5,
            Category: "land_use",
            FromTo: "Bosque a Cultivable",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 6,
            Category: "land_use",
            FromTo: "Bosque a Cultivable",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 7,
            Category: "land_use",
            FromTo: "Bosque a Cultivable",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 9,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 10,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 11,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 12,
            Category: "land_use",
            FromTo: "Pradera a Bosque",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 13,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 14,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 15,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 16,
            Category: "land_use",
            FromTo: "Pradera a Cultivable",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 17,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 18,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 19,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 20,
            Category: "land_use",
            FromTo: "Cultivable a Bosque",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 21,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 22,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 23,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 24,
            Category: "land_use",
            FromTo: "Cultivable a Pradera",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 25,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 26,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 27,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 28,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Reducida",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 29,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: "30",
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 31,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 32,
            Category: "tillage",
            FromTo: "Siembra Directa a Labranza Convencional",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 33,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 34,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 35,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 36,
            Category: "tillage",
            FromTo: "Labranza Reducida a Siembra Directa",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 37,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 38,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 39,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 40,
            Category: "tillage",
            FromTo: "Labranza Reducida a Labranza Convencional",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 41,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 42,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 43,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 44,
            Category: "tillage",
            FromTo: "Labranza Convencional a Siembra Directa",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 45,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 46,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 47,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 48,
            Category: "tillage",
            FromTo: "Labranza Convencional a Labranza Reducida",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 49,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 50,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 51,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 52,
            Category: "cover",
            FromTo: "Empieza a usar",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 53,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "temperate",
            Moisture: "moist"
        },
        {
            ID: 54,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "temperate",
            Moisture: "dry"
        },
        {
            ID: 55,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "tropical",
            Moisture: "moist"
        },
        {
            ID: 56,
            Category: "cover",
            FromTo: "Deja de usar",
            Climate: "tropical",
            Moisture: "dry"
        },
        {
            ID: 57,
            Category: "organic_input",
            FromTo: "Empieza a incorporar"
        },
        {
            ID: 58,
            Category: "organic_input",
            FromTo: "deja de incorporar"
        }
    ]

    manejoResiduos=[
    	{
    		id: 1,
    		value:"Removido, dejado en pilas o pozos"
    	},
    	{
    		id:2,
    		value:"Removido, compostado sin aireación forzada"
    	},
    	{
    		id:3,
    		value:"Removido, compostado con aireación forzada"
    	},
    	{
    		id:4,
    		value:"Dejado en el campo, como cobertura o incorporado"
    	},
    	{
    		id:5,
    		value:"Quemado en el lote"
    	},
    	{
    		id:6,
    		value:"Removido del lote para uso o venta"
    	}
    ]


	tipoArboles=[
		{
			id:'',
			tipo:''
		},
		{
			id:5,
			tipo:"Coníferas"
		},
		{
			id:6,
			tipo:"Árboles de Madera Dura (ej, Eucalyptus, Roble, Alamo)"
		}
	]

	state = {
    	step: 1,
    	razonSocial: '',
    	establecimiento: '',
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
		const { razonSocial, establecimiento, clima, materiaOrganica, humedad, pH, cambioUso, tiempoCambioUso, porcentajeCambioUso, cambioLabranza, tiempoCambioLabranza, porcentajeCambioLabranza, cambioCoberturas, tiempoCambioCoberturas, porcentajeCambioCoberturas, tratamientoRastrojos, clasificacionArboles, dapAnterior, densidadAnterior, dapActual, densidadActual} = this.state;
		const values = { razonSocial, establecimiento, clima, materiaOrganica, humedad, pH, cambioUso, tiempoCambioUso, porcentajeCambioUso, cambioLabranza, tiempoCambioLabranza, porcentajeCambioLabranza, cambioCoberturas, tiempoCambioCoberturas, porcentajeCambioCoberturas, tratamientoRastrojos, clasificacionArboles, dapAnterior, densidadAnterior, dapActual, densidadActual} 
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