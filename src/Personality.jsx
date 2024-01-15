import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from './Data/data.js';
import Header from './Composents/Header';
import { motion } from 'framer-motion';
import transition from './transition.jsx';
import retour from './Img/fleches (2).png';

const Personality = () => {
	const { id } = useParams();
	const fichePersonality = [data.find((element) => element.id.toString() === id)];
	const variantContainer = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};

	return (
		<div>
			<Header />
			{fichePersonality.map((element, id) => (
				<div key={id}>
					<div className="flex align-middle justify-center ">
						<Link to={'/list'}>
							<img className="cursor-pointer" src={retour} alt="retour" />
						</Link>

						<motion.h3
							variants={variantContainer}
							initial="hidden"
							animate="visible"
							transition={{ delay: 0, duration: 0.5, type: 'spring' }}
							className="text-[40px] font-bold py-[5px] px-3  text-[#FB4B4E] font-['Cinzel_Decorative'] ">
							{element.nom}
						</motion.h3>
					</div>

					<div className="flex flex-col-reverse items-center justify-between md:px-[30px] leading-[1.9rem] md:flex-row ">
						<motion.p
							initial={{ opacity: 0, x: '-100vw' }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 2, type: 'spring' }}
							className="font-['Plus_Jakarta_Sans'] font-light text-[18px] max-w-[700px] px-[10px] md:pl-[20px]">
							{element.description}
						</motion.p>
						<motion.img
							variants={variantContainer}
							initial="hidden"
							animate="visible"
							transition={{ delay: 0.3, duration: 3, type: 'spring' }}
							className="md:h-[650px] md:w-[1100px]  object-cover w-auto "
							src={element.images}
							alt="carte territoire associé"
							loading="lazy"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default transition(Personality);
