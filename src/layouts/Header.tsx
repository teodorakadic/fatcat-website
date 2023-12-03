import '../styles/Header.css'
import logo from '../assets/SVGs/logo.svg'
import Button from '../components/page-elements/Button'
import dropdownArrow from '../assets/SVGs/dropdownArrow.svg'
import CircleArrowSVG from '../components/SVG-components/CircleArrowSVG'

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
		</header>
	)
}

export default Header
