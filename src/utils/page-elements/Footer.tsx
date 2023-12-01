import '../../styles/Footer.css'
import logo from '../../SVGs/logo.svg'

const Footer = () => {
	return (
		<footer className="footer">
			<section>
				<div>
					<a href="/" className="a-logo">
						<img src={logo} className="logo" />
					</a>
					<p>
						Discover our comprehensive range of services including staff
						augmentation, software development, and hiring expertise. Get in
						touch so we can learn more about your business needs.
					</p>
				</div>
				<div></div>
				<div></div>
				<div></div>
			</section>
			<section className="footer-bottom">
				<a>Privacy policy</a>
				<a className="thin-text">© 2023 FatCat Coders. All rights reserved.</a>
				<a className="thin-text" href="mailto:hello@fatcatcoders.com">
					hello@fatcatcoders.com
				</a>
			</section>
		</footer>
	)
}

export default Footer
