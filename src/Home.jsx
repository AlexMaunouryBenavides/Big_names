import { Link } from 'react-router-dom';
import Header from './Composents/Header';
import { motion } from 'framer-motion';
import transition from './transition.jsx';

const Home = () => {
	const variantContainer = {
		hidden: {
			opacity: 0,
			x: '-100vw',
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	};
	return (
		<div className="bg-home ">
			<div className="px-[80px]">
				<Header />
				<div className="w-[700px] mt-[190px]">
					<motion.h2
						variants={variantContainer}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.2, duration: 0.5 }}
						className="font-['Cinzel_Decorative'] text-[#FB4B4E] text-[48px]">
						HISTOIRE DES GRANDS NOM DE CE MONDE
					</motion.h2>
					<motion.p
						variants={variantContainer}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.5, duration: 0.7 }}
						className="font-['Plu_Jakart_Sans'] text-[#F1F2F6] text-[24px] mt-[40px]">
						Ceux qui l'ont parcourue et conquît, fait évoluer pour le bien de tous, ou au contraire marqué
						d'ancre et de sang.
					</motion.p>
					<Link to={'list'}>
						<motion.button
							variants={variantContainer}
							initial="hidden"
							animate="visible"
							transition={{ delay: 0.2, duration: 0.9 }}
							className="font-['Cinzel_Decorative'] text-[#F1F2F6] text-[20px] bg-[#FB4B4E] shadow-[rgba(251,_75,_78,_0.5)_0px_0px_10px]  py-[10px] px-[40px] mt-[40px] active:bg-[#F1F2F6] active:text-[#FB4B4E] duration-[0.3s]">
							Visitez
						</motion.button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default transition(Home);
