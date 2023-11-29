import './App.css'
import CircleSVG from './CircleSVG'
import logo from './logo.svg'
import circle from './circle.svg'

function App() {
	return (
		<div className="app">
			<header className="header">
				<img src={logo} className="logo" />
				{/* <span>fatcat</span>
					<span className="coders">coders</span> */}
				<div className="links">
					<span className="link">Services</span>
					<span className="link">Careers</span>
					<span className="link">About Us</span>
					<span className="link blog">Blog</span>
					<a>
						<span>Contact Us</span>
						<CircleSVG />
					</a>
				</div>
			</header>
		</div>
	)
}

export default App
