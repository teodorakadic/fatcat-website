import '../styles/Home.css'
import Button from '../utils/page-elements/Button'
import Image from '../utils/page-elements/Image'
import Partners from '../utils/page-elements/Partners'
import CircleArrowSVG from '../utils/SVG-components/CircleArrowSVG'

import imageSrc from '../assets/images/home/home-hero.webp'

const Home = () => {
	return (
		<main>
			<div className="home">
				<div className="column">
					<div>
						<p>
							Software and staffing solutions{' '}
							<span className="thin-text">that drive success</span>
						</p>
					</div>
					<div className="buttons">
						<Button
							style="black"
							link=""
							text="Scale your team"
							icon={<CircleArrowSVG />}
						/>
						<Button
							style="clear"
							link=""
							text="Build your product"
							icon={<CircleArrowSVG />}
						/>
					</div>
				</div>
				<div className="column">
					<Image src={imageSrc} />
				</div>
			</div>
			<Partners />
		</main>
	)
}

export default Home
