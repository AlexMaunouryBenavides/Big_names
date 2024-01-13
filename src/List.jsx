import React, { useState } from 'react';
import Header from './Composents/Header';
import { data } from './Data/data.js';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import transition from './transition.jsx';

const List = () => {
	const [openFilter, setOpenFilter] = useState(true);
	const [categorie, setCategorie] = useState('');
	const [filterResult, setFilterResult] = useState(data);

	function handleFilter() {
		setOpenFilter(!openFilter);
	}

	function handleClickCategorie(e) {
		const value = e.target.textContent;
		filterByCategorie(value);
	}
	function filterByCategorie(categorie) {
		const filterResult = data.filter((pays) => pays.continents === categorie);
		setFilterResult(filterResult);
		console.log(filterResult);
		setCategorie(categorie);
	}
	function handleReset() {
		setCategorie('');
		setFilterResult(data);
	}
	const { id } = useParams();

	const variantsList = {
		open: {
			opacity: 1,
		},
		closed: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};

	return (
		<>
			<div className="flex flex-col bg-list  h-[100vh] bg-no-repeat bg-[center_top_10vh] bg-cover  ">
				<Header />
				<div className="md:flex   flex-row-reverse justify-between  md:w-[1700px] md:m-auto">
					<div className=" px-3 py-5 md:w-[30%] md:h-[50vh] md:border-l-[1px] border-l-black ">
						<div className=" flex  gap-5">
							<button
								onClick={handleFilter}
								className="text-[#F1F2F6] font-['Plu_Jakart_Sans'] font-bold text-[16px] bg-[#000501] px-5 py-1 rounded-lg ">
								Filtre :
							</button>
							<button
								onClick={handleReset}
								className="text-[#F1F2F6] font-['Plu_Jakart_Sans'] font-bold text-[16px] bg-[#000501] px-5 py-1 rounded-lg ">
								Liste complète
							</button>
						</div>

						<motion.div
							animate={openFilter ? 'open' : 'closed'}
							variants={variantsList}
							className={` gap-3 flex-wrap text-[#000501] font-['Plu_Jakart_Sans'] py-5 md:flex `}>
							<motion.button
								whileHover={{ scale: 0.9, color: '#F1F2F6' }}
								transition={{ type: 'spring', stiffness: 120, duration: 0.2 }}
								onClick={handleClickCategorie}
								className="px-10 py-1 rounded-lg bg-[#FB4B4E] ">
								Europe
							</motion.button>
							<motion.button
								whileHover={{ scale: 0.9, color: '#F1F2F6' }}
								transition={{ type: 'spring', stiffness: 120, duration: 0.2 }}
								onClick={handleClickCategorie}
								className="px-10 py-1 rounded-lg bg-[#FB4B4E] ">
								Afrique
							</motion.button>
							<motion.button
								whileHover={{ scale: 0.9, color: '#F1F2F6' }}
								transition={{ type: 'spring', stiffness: 120, duration: 0.2 }}
								onClick={handleClickCategorie}
								className="px-10 py-1 rounded-lg bg-[#FB4B4E] ">
								Asie
							</motion.button>
							<motion.button
								whileHover={{ scale: 0.9, color: '#F1F2F6' }}
								transition={{ type: 'spring', stiffness: 120, duration: 0.2 }}
								onClick={handleClickCategorie}
								className="px-10 py-1 rounded-lg bg-[#FB4B4E] ">
								Moyen-Orient
							</motion.button>
							<motion.button
								whileHover={{ scale: 0.9, color: '#F1F2F6' }}
								transition={{ type: 'spring', stiffness: 120, duration: 0.2 }}
								onClick={handleClickCategorie}
								className="px-10 py-1 rounded-lg bg-[#FB4B4E] ">
								Amerique du Nord
							</motion.button>
							<motion.button
								whileHover={{ scale: 0.9, color: '#F1F2F6' }}
								transition={{ type: 'spring', stiffness: 120, duration: 0.2 }}
								onClick={handleClickCategorie}
								className="px-10 py-1 rounded-lg bg-[#FB4B4E] ">
								Amerique du Sud
							</motion.button>
						</motion.div>
					</div>
					<div className="  md:flex md:flex-wrap md:w-[70%] md:content-start gap-3 ">
						{filterResult.map((element, id) => (
							<motion.div
								key={id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ delay: 0.1 + id * 0.05 }}>
								<Link to={`/list/${element.id}`}>
									<motion.h3
										whileHover={{ scale: 0.9, color: '#F1F2F6' }}
										transition={{ type: 'spring', stiffness: 120, duration: 0.2 }}
										className="text-[24px] py-[5px] px-3 bg-[#FB4B4E] rounded-lg text-[#000] font-['Cinzel_Decorative']">
										{element.nom}
									</motion.h3>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default transition(List);
