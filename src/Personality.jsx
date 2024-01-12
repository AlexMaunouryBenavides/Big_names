import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './Data/data.js';
import Header from './Composents/Header';
import { motion } from 'framer-motion';
import transition from './transition.jsx';

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
					<motion.h3
						variants={variantContainer}
						initial="hidden"
						animate="visible"
						transition={{ delay: 1, duration: 0.5, type: 'spring' }}
						className="text-[40px] font-bold py-[5px] px-3  text-[#FB4B4E] font-['Cinzel_Decorative'] text-center">
						{element.nom}
					</motion.h3>
					<div className="flex items-center justify-between px-[30px] leading-[1.9rem]">
						<motion.p
							initial={{ opacity: 0, x: '-100vw' }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0, duration: 2, type: 'spring' }}
							className="font-['Plus_Jakarta_Sans'] font-light text-[18px] max-w-[700px] pl-[50px]">
							{element.description}
						</motion.p>
						<motion.img
							variants={variantContainer}
							initial="hidden"
							animate="visible"
							transition={{ delay: 0.3, duration: 3, type: 'spring' }}
							className="h-[650px] w-[1100px] object-contain "
							src={element.images}
							alt=""
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default transition(Personality);
