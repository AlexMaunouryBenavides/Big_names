import React from 'react';
import { motion } from 'framer-motion';

const transition = (OGComponent) => {
	const AnimatedComponent = (props) => (
		<>
			<OGComponent {...props} />
			<motion.div
				className="fixed top-0 left-0 w-full h-screen origin-bottom bg-[#FB4B4E]"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 0.3 }}
			/>
			<motion.div
				className="fixed top-0 left-0 w-full h-screen origin-top bg-[#F1F2F6] "
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 0.3 }}
			/>
		</>
	);

	return AnimatedComponent;
};

export default transition;
