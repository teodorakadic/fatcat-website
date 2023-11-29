import '../styles/ContactUs.css'

const ContactUs = () => {
	return (
		<div className="contact">
			<div>
				<div>Let's work together</div>
				<div>
					We'd love to connect and discuss how we can help you enhance your
					business.
				</div>
				<a>Book a call</a>
				<a>Subotička 23/22, Belgrade, Serbia</a>
				<a>hello@fatcatcoders.com</a>
			</div>
			<div>
				<form>
					<label>
						Your name:
						<input type="text" name="" />
					</label>
					<label>
						Your email address:
						<input type="text" name="" />
					</label>
					<label>
						Message:
						<input type="text" name="" />
					</label>
					<input type="submit" value="submit" />
				</form>
			</div>
		</div>
	)
}

export default ContactUs
