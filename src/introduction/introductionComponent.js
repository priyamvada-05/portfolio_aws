import React from 'react';
import './introductionComponent.scss';
import Img from '../assest/img.png';

const IntroductionComponent = ()=>{
	const src='../assest/img.jpeg';
	return(
	 	<div className="hero">
	      <div className="container">
	      	<div className='title'>
	        <h1 className="hero-title load-hidden">
	        <div className='w3-animate-zoom'>
	          &#123; ...Hi, my name is <span className="text-color-main">Pranshul Pandey,</span>
	          <br />
	          I'm the Web Developer &#125;
	        </div>
	        </h1>

	        <button className="btn btn1">
	          Know more
	        </button>

	        </div>
	        <div className='w3-animate-zoom pic'>
	        	<img src={Img} alt='img' height='512px' />
	        </div>

	      </div>
	    </div>

		)
}

export default IntroductionComponent
