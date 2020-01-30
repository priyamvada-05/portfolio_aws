import React from 'react';
import './contactComponent.scss';
import linkedin from '../assest/linkedin.png';
import GitHub from '../assest/GitHub.png';
import gmail from '../assest/gmail.png';

const ContactComponent = ()=>{

	return(
		<div className='new'>
			 <h2 class="title">
	          Contact
	        </h2>
			<div className='contact'>
				<div className='new1'>

		        <div class="contact-wrapper">
		          <p class="text">
		            Let's work together!
		          </p>
		        </div>
		       		<div className='icon1'>
					<img src={linkedin} className='link' alt='' height='50px' width='50px'/>
					<img src={GitHub} className='git' alt='' height='50px' width='50px'/>
					<img src={gmail} alt='' height='50px' width='65px'/>

					</div>
		        </div>
		        </div>

		        <div className='new2'>
		        	<span >&copy; 2020 - Developed by Pranshul Pandey</span>
				</div>	
		</div>
		)
}

export default ContactComponent