import React from 'react';
import _ from 'lodash';
//se necesita isntalar esta libreria antes de usar el codio porque utilizo funciones de aqui lodash
//sudo npm i -g npm 
//sudo npm i --save lodash


export class DropDownCategoryilter extends React.Component {


  //valores de inicio

  constructor(props){
	super(props);
	this.state ={
	  items:[],
	  isLoaded: false,
	  valor:"select",
	  eventID:"0",
	  campusId:"MTY",
	  costId:"0.0",
	  startDateId:" ",
	  categoryId:" ",

	}
  }

//fetch de los datos del api
	componentDidMount(){

	fetch('https://cartelerai-api.herokuapp.com/events',{
	  method:"GET",
	  headers:{
		'Accept' : 'application/vnd.cartelera-api.v1',
		'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.sgAjfo5zm77syDfPFxnMzt6ASC2JcAhGdKb8jCJCBBs'
	  },
	})
	  .then(res => res.json())
	  .then(json => {
		this.setState({
		  isLoaded: true, 
		  items: json,
		})
	  });

	}
//============================================Campus====================
	selectEvent_campus(){
		this.setState({campusId:this.refs.eventSelector_campus.value});// re escribir el valo de campus id, capturando el valor del filtro
   		 //console.log(this.refs.eventSelector_campus.value)
  	}
 //============================================Cost====================
	selectEvent_cost(){
		this.setState({costId:this.refs.eventSelector_cost.value});
   		// console.log(this.refs.eventSelector_cost.value)
  	}

 //============================================Categoria====================
	selectEvent_category(){
		this.setState({categoryId:this.refs.eventSelector_category.value});
   		 //console.log(this.refs.eventSelector_category.value)
  	}

 //============================================Date====================
	selectEvent_date(){
		this.setState({startDateId:this.refs.eventSelector_date.value});
   		// console.log(this.refs.eventSelector_date.value)
  	}

	render(){

		var { isLoaded, items } = this.state;
//============================================Campus====================
		let uniquecampus = _.uniqBy(items,'campus');//obtener nada mas un elemento no repetido de campus
		let campusOption = uniquecampus.map(item => (<option key={`optioncampus_${item.id}`} value={item.campus}>{item.campus}</option>));// mapear las opciones para que aparezcan en el filtro.

//============================================Cost====================
		let uniquecost = _.uniqBy(items,'cost');
		let costOption = uniquecost.map(item => (<option key={`optioncost_${item.id}`} value={item.cost}>{item.cost}</option>));
		costOption.unshift(" ");

//============================================Date====================
		let uniquedate = _.uniqBy(items,'startDatetime');
		let startDatetimeOption = uniquedate.map(item => (<option key={`optiondate_${item.id}`} value={item.startDatetime}>{item.startDatetime}</option>));
		startDatetimeOption.unshift(" ");

//============================================category====================
		let uniquecategory = _.uniqBy(items,'category');
		let categoryOption = uniquecategory.map(item => (<option key={`optioncategory_${item.id}`} value={item.category}>{item.category}</option>));
		categoryOption.unshift(" ");

//============================================variables====================

// Aqui se guardan todos los eventos que se filtraron de filtran los eventos e

		let selectedEvent = _.filter(this.state.items, ['campus',this.state.campusId],['cost',this.state.costId],['category',this.state.categoryId],['startDatetime',this.state.startDateId]);
		console.log(selectedEvent)


		//ignore
		// htis was to print the photos for the events	
		//let imgs = _.map(selectedEvent,'photo');
		//console.log(imgs)
		//let images = selectedEvent.map(image =>( <img key = {image} src={imgs}/>));


		if(!isLoaded)
		{
		  return <div>Loading...</div>;
		}
		else{

			return (
			  <div className="App">
				<div className="col-xs-10 col-xs-offset-1">
				</div>

				  <label> 
					&ensp; Campus : 
				  </label>
				  <select ref="eventSelector_campus" value={this.state.campusId} onChange={ (e) => { this.selectEvent_campus();}} >
					{campusOption} 
				  </select>

				  <label> 
					&ensp; Cost : 
				  </label>
				  <select ref="eventSelector_cost" value={this.state.costId} onChange={ (e) => { this.selectEvent_cost();}} >
					{costOption} 
				  </select>

				  <label> 
					&ensp; Fecha : 
				  </label>
				  <select ref="eventSelector_date" value={this.state.startDateId} onChange={ (e) => { this.selectEvent_date();}}>
					{startDatetimeOption} 
				  </select>

				  <label> 
					&ensp; Categoria : 
				  </label>
				  <select ref="eventSelector_category" value={this.state.categoryId} onChange={ (e) => { this.selectEvent_category();}}>
					{categoryOption} 
				  </select>

			  </div>
			);
		}
	}
}

//<-- <EventList selectedEvent/> -->