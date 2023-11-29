import '../styles/Header.css'
import CircleSVG from '../utils/CircleSVG'
import logo from '../SVGs/logo.svg'

const Header = () => {
	return (
		<div className="app">
			<div className="header">
				<a href="/" className="a-logo">
					<img src={logo} className="logo" />
				</a>
				<div className="links">
					<span className="link">Services</span>
					<span className="link">Careers</span>
					<span className="link">About Us</span>
					<span className="link blog">Blog</span>
					<a className="contact-button" href="/contact-us">
						<span>Contact Us</span>
						<CircleSVG />
					</a>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default Header
