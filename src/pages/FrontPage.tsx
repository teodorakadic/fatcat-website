import '../styles/App.css'
import CircleSVG from '../utils/CircleSVG'
import logo from '../SVGs/logo.svg'

const FrontPage = () => {
	return (
		<div className="app">
			<div className="header">
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
			</div>
			<div></div>
		</div>
	)
}

export default FrontPage
