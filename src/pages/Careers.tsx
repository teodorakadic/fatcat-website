import '../styles/Careers.css'
import CircleArrowSVG from '../utils/SVG-components/CircleArrowSVG'
import Button from '../utils/page-elements/Button'

import imageSrc from '../assets/images/careers/careers-hero-2.webp'

const Careers = () => {
	return (
		<main className="careers">
			<div>
				<div>Navigate your career path with us</div>
				<div>
					Enjoy a good work-life balance in a company where your voice matters.
				</div>
				<Button
					style="black"
					link=""
					text="See open roles"
					icon={<CircleArrowSVG />}
				/>
			</div>
			<div>
				<img src={imageSrc} />
			</div>
		</main>
	)
}

export default Careers
