import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
var linkHenry = 'http:';
var Link = 'http:';

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a091aed]">
			{/*  Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-[#d059f8]"> Hola! mi nombre es</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Carla</h1>
				{/* <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Soy full-stack developer</h2> */}
				<p className="text-[#8892b0] py-4 max-w-[700px]">
					Recientemente graduada como Desarrolladora Web FullStack de{' '}
					<a href="http://www.soyhenry.com">#soyhenry.</a> Actualmente realizando proyectos personales y al encuentro de mi primer trabajo IT
				</p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#d059f8] hover:border-[#d059f8]">
						Proyectos
						<span className="group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3 " />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;