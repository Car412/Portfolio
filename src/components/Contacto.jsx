import React from 'react';

const Contacto = () => {
	return (
		<div name="contact" className="w-full h-screen bg-[#0a091aed] flex justify-center items-center p-4">
			<form
				method="POST"
				action="https://getform.io/f/3481c69e-ce02-41f9-8f72-136bb9906744"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#d059f8] text-gray-300">Contacto</p>
					<p className="text-gray-300 py-4">
						¿Querés enviarme alguna propuesta laboral, dejarme algún feedback o
						simplemente saludar? Podés hacerlo debajo:
					</p>
				</div>
				<input className=" bg-[#ccd6f6] p-2" type="text" placeholder="Nombre" name="name" />
				<input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
				<textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Mensaje" />
				<button className="text-white border-2 hover:bg-[#d059f8] hover:border-[#d059f8] px-4 py-3 my-8 mx-auto flex items-center">
					Enviar
				</button>
			</form>
		</div>
	);
};

export default Contacto;