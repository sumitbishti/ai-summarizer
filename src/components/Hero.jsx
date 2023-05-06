import { logo } from "../assets";

const Hero = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
				<img src={logo} alt="logo" className="w-28 object-contain" />
				<button
					className="black_btn"
					onClick={() => window.open("https://www.github.com/sumitbishti")}
				>
					GitHub
				</button>
			</nav>

			<h1 className="head_text">
				Summarize articles with <br className="max-md: hidden" />
				<span className="orange_gradient">OpenAI GPT-4</span>
			</h1>
			<h2 className="desc">
				Simplify your reading with Summize, an open-source article summarizer  
			</h2>
		</header>
	);
};

export default Hero;
