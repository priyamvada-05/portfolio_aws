import React from 'react';
import './aboutmeComponent.scss';
import Img from '../assest/img.jpeg';

const AboutMeComponent= ()=>{

	return(
		<div className='about'>

		        <h2 class="section-title w3-animate-zoom">
		          About me
		        </h2>

		        <div class="row">
	         		 <div class="col-md-6 col-sm-12">
	         			<div class="image">
			              <img
			                class="img-fluid rounded shadow-lg"
			                height="auto"
			                width="350px"
			                src={Img}
			                alt="Profile Image"
			              />
			            </div>
	         		 </div>

	         		  <div class="col-md-6 col-sm-12">
			            <div class="info">
			              <p class="info-text">
							I'm a professional and passionate Software Developer focused on efficiency and constant learning.
			              </p>
			              <p class="info-text">
							I have created solutions for my clients by improving their web development processes and accomplish their ideas come true, either from the front-end or the back-end mostly using JavaScript, React, Gatsby, Node, Express.js & MongoDB.
			              </p>
			              <p class="info-text">
							I would love to set up an introduction call to discuss how I could help your business and make your goals happen.
			              </p>
							<a href="#" class="button">View Resume</a>
			            </div>
	         		 </div>
         		</div>
		</div>
		)
}

export default AboutMeComponent;