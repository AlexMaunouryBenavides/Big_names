import React from 'react';
import Menu from '../Img/menu.svg';
function Header() {
	return (
		<div className="p-5  flex justify-between items-center">
			<div className="font-['Inspiration'] text-[#FB4B4E] text-[80px]">
				<p>N</p>
			</div>
			<div className="font-['Cinzel_Decorative'] text-[#FB4B4E] text-[80px]">
				<h1>BIG NAMES</h1>
			</div>
			<div>
				<img src={Menu} alt="" />
			</div>
		</div>
	);
}

export default Header;
