import '../../styles/Header.css'
import Button from './Button'
import logo from '../../SVGs/logo.svg'
import dropdownArrow from '../../SVGs/dropdownArrow.svg'
import CircleArrowSVG from '../SVG-components/CircleArrowSVG'

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
				<Button
					style="blue"
					link="/contact-us"
					text="Contact Us"
					icon={<CircleArrowSVG />}
				></Button>
			</div>
		</div>
	)
}

export default Header
