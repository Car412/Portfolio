/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Yo from '../images/Yo.jpg';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [ nav, setNav ] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a091aed] text-gray-300">
			<div>
				<img src={Yo} alt="Logo image" style={{ width: '12%' }} className="rounded-full " />
			</div>
			{/* menu */}

			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						Acerca de mi
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="work" smooth={true} duration={500}>
						Proyectos
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contacto
					</Link>
				</li>
			</ul>

			{/* Hamburguer */}
			<div onClick={handleClick} className="md:hidden z-10">
				{
					!nav ? <FaBars /> :
					<FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={

						!nav ? 'hidden' :
						' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						Acerca de mi
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Proyectos
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contacto
					</Link>
				</li>
			</ul> 

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300 "
							href= "https://www.linkedin.com/in/carlaedefazy"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300 "
							href="https://github.com/Car412"
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-gray-300 "
							href="mailto:carla_defazy@hotmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
						<a
							className="flex justify-between items-center w-full text-gray-300 "
							href="https://drive.google.com/file/d/1hINt6uWC7m1TC84K8ku0IDXiu-COjgEC/view?usp=sharing"
						>
							Curriculum <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;