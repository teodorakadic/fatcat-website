import '../styles/Header.css'
import logo from '../assets/SVGs/logo.svg'
import Button from '../components/page-elements/Button'
import dropdownArrow from '../assets/SVGs/dropdownArrow.svg'
import { ReactComponent as CircleArrowSVG } from '../assets/SVGs/circle-arrow.svg'

const Header = () => {
	return (
		<header className="header-wrapper">
			<div className="header">
				<a href="/" className="a-logo">
					<img src={logo} className="logo" />
				</a>
				<div className="links">
					<a className="link">
						<button className="services">Services</button>
						<img className="dropdown-arrow" src={dropdownArrow} />
					</a>
					<a className="link">Client stories</a>
					<a className="link">Careers</a>
					<a className="link">About Us</a>
					<a className="link">Blog</a>
					<Button style="blue" text="Contact Us" icon={<CircleArrowSVG />} />
				</div>
			</div>
		</header>
	)
}

export default Header
