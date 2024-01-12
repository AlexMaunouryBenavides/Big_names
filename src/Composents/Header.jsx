import React from 'react';
import Menu from '../Img/menu.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Header() {
	return (
		<motion.div
			initial={{ y: '-5vh', opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
			className=" p-5  flex justify-between items-center">
			<Link to={'/'}>
				<div className="font-['Inspiration'] text-[#FB4B4E] text-[40px] md:text-[80px]">
					<p>N</p>
				</div>
			</Link>

			<div className="font-['Cinzel_Decorative'] text-[#FB4B4E] text-[32px] md:text-[80px]">
				<h1>BIG NAMES</h1>
			</div>
			<div>
				<img src={Menu} alt="" />
			</div>
		</motion.div>
	);
}

export default Header;
