import React from 'react';

import css from "../images/css.png";
///import Git from "../images/Git.png";
import github from "../images/github.png";
import html from "../images/html.png";
import javascript from "../images/javascript.png";
import node from "../images/node.png";
import PostgresSQL from "../images/PostgresSQL.png";
import react from "../images/react.png";
import redux from "../images/redux.png";

const Skills = () => {
	return (
		<div name="skills" className="w-full h-screen bg-[#0a091aed] text-gray-300">
			{/* Container */}
			<div className="max-w-[1000PX] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#d059f8] ">Skills</p>
					<p className="py-4">Algunas de las tecnologías con las que he trabajado</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={html} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={css} alt="HTML icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={javascript} alt="HTML icon" />
						<p className="my-4">JAVASCRIPT</p>
					</div>
					<div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={react} alt="HTML icon" />
						<p className="my-4">REACT JS</p>
					</div>
					<div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={github} alt="HTML icon" />
						<p className="my-4">GITHUB</p>
					</div>
					{/* <div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Git} alt="HTML icon" />
						<p className="my-4">GIT</p>
					</div> */}
					<div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={node} alt="HTML icon" />
						<p className="my-4">NODE JS</p>
					</div>
					<div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={PostgresSQL} alt="HTML icon" />
						<p className="my-4">POSTGRES SQL</p>
					</div>
					 <div className="shadow-sm shadow-[$040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={redux} alt="HTML icon" />
						<p className="my-4">REDUX</p>
					</div> 
				</div>
			</div>
		</div>
	);
};

export default Skills;