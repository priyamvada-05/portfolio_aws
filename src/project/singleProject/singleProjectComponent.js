import React from 'react';
import './singleProjectComponent.scss';
import Img from '../../assest/img.jpeg';
import Tilt from 'react-tilt';

const SingleProjectComponent = (props)=>{

	console.log(props)
	return(
		<div class="row">
	    	<div class="col-lg-5 col-sm-12">
              <div class="text">
                <h3 class="text-title">Project Title</h3>
                <div className='para'>
                  <p class="mb-4">
                  	{props.p1}
                  </p>
                  <p class="mb-4">
                  	{props.p2}
                  </p>
                </div>
				<a href="#" class="button">View Resume</a>
				<a href="#" class="button">View Resume</a>
				<hr />
              </div>
	    	</div>

	    	<div class="col-lg-7 col-sm-12">
              <div class="image">
					<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 350, width: 300 }} >
						 <div className="Tilt-inner"> 
						 	<img src={Img} alt='logo' height='350px' width='600px' />
						 </div>
					</Tilt>
              </div>
	    	</div>



    	</div>
		)
}

export default SingleProjectComponent