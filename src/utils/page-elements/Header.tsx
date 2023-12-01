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
				<a className="link">
					<button className="services">Services</button>
					<img src={dropdownArrow} />
				</a>
				<a className="link" href="/careers">
					Careers
				</a>
				<a className="link">About Us</a>
				<a className="link">Blog</a>
				<Button
					style="blue"
					link="/contact-us"
					text="Contact Us"
					icon={<CircleArrowSVG />}
				/>
			</div>
		</div>
	)
}

export default Header
