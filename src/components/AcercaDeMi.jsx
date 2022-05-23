import React from 'react';

const Acerca = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a091aed] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
					<div className="sm:text-rigth pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#d059f8]">Sobre mi</p>
					</div>
					<div>-</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold ">
						<p>Hola! Encantada de conocerte!</p>
					</div>
					<div>
						<p>
							En el año 2021, sin saber nada de programación, ingresé al bootcamp de #soyhenry.
							Lo tomé como un lindo desafío, no solo en lo intelectual, sino también, en lo personal.
							Hoy, luego de haber conseguido el objetivo que me propuse, puedo decir que encontré en la programación un campo donde 
							superarme a mi misma en cada proyecto, es una gran motivación!

						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Acerca;