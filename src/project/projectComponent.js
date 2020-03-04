import React from 'react';
import './projectComponent.scss';
import Img from '../assest/img.jpeg';
import { projectData} from '../data/projectData';
import SingleProjectComponent from './singleProject/singleProjectComponent';


const ProjectsComponent = ()=>{
	const projectDatas=Object.values(projectData);
	return(
		
		<div className='project'>
			<h2 className="section-title">
	          Project
	        </h2>

	        { projectDatas.map(data=>
	        		<SingleProjectComponent {...data} />
	        		)}

		</div>
		
		)
}

export default ProjectsComponent