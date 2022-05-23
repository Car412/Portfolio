import React from 'react';
import progress from "../images/progress.png";
import cooking from "../images/cooking.png";
import countries from "../images/countries.png";


const Proyectos = () => {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a091aed]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#d059f8]">Proyectos</p>
					<p className="py-6">Algunos de mis trabajos recientes</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					{<div
						style={{ backgroundImage: `url(${cooking})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider text-center">Henry Food</span>

							<div className="pt-8 text-center">
								{/* <a href="https://www.youtube.com/watch?v=t6lC4yzAeh4">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a> */}
								<a href="https://github.com/Car412/PiFood">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>}
					<div
						style={{ backgroundImage: `url(${countries})`}}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">Henry Countries</span>

							<div className="pt-8 text-center">
								{/* <a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a> */}
								<a href="https://github.com/Car412/Countries">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>
	);
};

export default Proyectos;