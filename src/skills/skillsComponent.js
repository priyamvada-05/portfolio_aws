import React from 'react';
import './skillsComponent.scss';
import ReactImg from '../assest/react.png';
import { ReactComponent as AngularImg} from '../assest/angular-icon.svg';
import ExpressImg from '../assest/express.png';
import PythonImg from '../assest/python.png';
import RImg from '../assest/R.png';
import MongoImg from '../assest/mongo.jpg';

class SkillsComponent extends React.Component{

	constructor(){
		super();
		this.state={
			react:null,
			angular:null,
			express:null,
			python:null,
			r:null,
			mongo:null
		}
	}

	OnChangeIn= (event)=>{
		const {name, value}= event.target;
		console.log('this is change in')
		console.log(name)
		console.log(value)
		this.setState({[name]:true})
	}

	OnChangeOut= (event)=>{
		const {name, value}= event.target;
		console.log('this is change out')
		console.log(name)
		console.log(value)
		this.setState({[name]:false})

	}


	render(){
	return(
		<div className='skills'>
		<div className='container-fluid text-center padding'>
				<div className='col-12'>
					<h2 className='title'>Skills</h2>
				</div>
				<div className='row'>
				<div className='col-md-4 social padding'>
					<img src={ReactImg} 
						 onMouseOver={this.OnChangeIn} 
						 onMouseOut={this.OnChangeOut}
						 alt='' 
						 height='190px' 
						 width='' 
						 name='react'/>
					{ this.state.react ? <p className='text'>React.js</p>: null}
				</div>
				<div className='col-md-4 social padding'>
					<AngularImg 
						className='angular' 
						onMouseOver={this.OnChangeIn}
						onMouseOut={this.OnChangeOut}
						height='190px'
						name='angular'/>
					{ this.state.angular ? <p className='text'>Angular.js</p>: null}
				</div>
				<div className='col-md-4 social padding'>
					<img 
						src={ExpressImg} 
						onMouseOver={this.OnChangeIn}
						onMouseOut={this.OnChangeOut}
						alt='' 
						height='190px' 
						width='' 
						name='express'/>
					{ this.state.express ? <p className='text'>Express.js</p>: null}
				</div>
				</div>

				<div className='row'>
				<div className='col-md-4 social padding'>
					<img src={PythonImg} 
						 onMouseOver={this.OnChangeIn} 
						 onMouseOut={this.OnChangeOut}
						 alt='' height='190px' width='' name='python' />
					{ this.state.python ? <p className='text'>Python</p>: null}
				</div>
				<div className='col-md-4 social padding'>
					<img src={RImg} 
						 onMouseOver={this.OnChangeIn}
						 onMouseOut={this.OnChangeOut}
						 alt='' height='190px' width='' name='r'/>
					{ this.state.r ? <p className='text'>R language</p>: null}
				</div>
				<div className='col-md-4 social padding'>
					<img src={MongoImg} 
						 onMouseOver={this.OnChangeIn}
						 onMouseOut={this.OnChangeOut}
						 alt='' height='190px' width='' name='mongo'/>
					{ this.state.mongo ? <p className='text'>Mongo DB</p>: null}
				</div>
				</div>
		</div>
		<hr className='hr' />
		</div>
		)
}
}

export default SkillsComponent