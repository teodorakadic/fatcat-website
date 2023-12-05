import '../styles/Footer.css'
import logo from '../assets/SVGs/logo.svg'
import Button from '../components/page-elements/Button'
import { ReactComponent as FacebookSVG } from '../assets/SVGs/facebook.svg'
import { ReactComponent as LinkedIn } from '../assets/SVGs/linkedin.svg'
import { ReactComponent as Instagram } from '../assets/SVGs/instagram.svg'
import { ReactComponent as CircleArrowSVG } from '../assets/SVGs/circle-arrow.svg'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="foo">
				<section className="footer-top">
					<div className="column-1">
						<a href="/" className="a-logo">
							<img src={logo} className="logo" />
						</a>
						<p>
							Discover our comprehensive range of services including staff
							augmentation, software development, and hiring expertise. Get in
							touch so we can learn more about your business needs.
						</p>
						<Button
							icon={<CircleArrowSVG />}
							link="/"
							style="black"
							text="Contact us"
						/>
					</div>
					<div>
						<p>SERVICES</p>
						<a>Software Development</a>
						<div>
							<a>Application Development</a>
							<a>Web Development</a>
						</div>
						<a>Staff Augmentation</a>
						<a>Hiring Partner</a>
						<div>
							<a>Technical Recruitment</a>
							<a>Recruiter on Demand</a>
						</div>
						<a>Employer of Record</a>
					</div>
					<div>
						<p>COPMANY</p>
						<a>Careers</a>
						<a>About us</a>
						<a>Blog</a>
					</div>
					<div>
						<p>FOLLOW US</p>
						<a
							aria-label="Go to our facebook page"
							target="_blank"
							href="https://www.facebook.com/fatcatcoders"
						>
							{<FacebookSVG />}
						</a>
						<a href="">{<LinkedIn />}</a>
						<a href="">{<Instagram />}</a>
					</div>
				</section>
				<section className="footer-bottom">
					<a>Privacy policy</a>
					<a className="thin-text">
						© 2023 FatCat Coders. All rights reserved.
					</a>
					<a className="thin-text" href="mailto:hello@fatcatcoders.com">
						hello@fatcatcoders.com
					</a>
				</section>
			</div>
		</footer>
	)
}

export default Footer
