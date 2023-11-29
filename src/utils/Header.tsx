import '../styles/Header.css'
import logo from '../SVGs/logo.svg'
import dropdownArrow from '../SVGs/dropdownArrow.svg'
import GoButton from './GoButton'

const Header = () => {
	return (
		<div className="header">
			<a href="/" className="a-logo">
				<img src={logo} className="logo" />
			</a>
			<div className="links">
				<span className="link">
					<button className="services">Services</button>
					<img src={dropdownArrow} />
				</span>
				<span className="link">Careers</span>
				<span className="link">About Us</span>
				<span className="link">Blog</span>
				<GoButton style="blue" link="/contact-us" text="Contact Us"></GoButton>
			</div>
		</div>
	)
}

export default Header
