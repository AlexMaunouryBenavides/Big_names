import Header from './Composents/Header';

function App() {
	return (
		<div className="bg-[url('./img/bg_home.svg')] bg-center bg-cover bg-no-repeat h-screen ">
			<div className="px-[80px]">
				<Header />
				<div className="w-[700px] mt-[190px]">
					<h2 className="font-['Cinzel_Decorative'] text-[#FB4B4E] text-[48px]">
						HISTOIRE DES GRANDS NOM DE CE MONDE
					</h2>
					<p className="font-['Plu_Jakart_Sans'] text-[#F1F2F6] text-[24px] mt-[40px]">
						Ceux qui l'ont parcourue et conquît, fait évoluer pour le bien de tous, ou au contraire marqué
						d'ancre et de sang.
					</p>
					<button className="font-['Cinzel_Decorative'] text-[#F1F2F6] text-[20px] bg-[#FB4B4E] shadow-[rgba(251,_75,_78,_0.5)_0px_0px_10px]  py-[10px] px-[40px] mt-[40px] active:bg-[#F1F2F6] active:text-[#FB4B4E] duration-[0.3s]">
						Visitez
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
