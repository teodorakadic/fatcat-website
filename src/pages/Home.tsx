import '../styles/Home.css'
import Button from '../components/page-elements/Button'
import Partners from '../components/page-elements/Partners'
import { ReactComponent as CircleArrowSVG } from '../assets/SVGs/circle-arrow.svg'

import imageSrc from '../assets/images/home/home-hero.webp'

const Home = () => {
	return (
		<main>
			<section className="home-wrapper">
				<div className="temp">
					<div className="home">
						<div className="home-padding">
							<div className="left-column">
								<div className="banner-title">
									<p>
										<p className="bold-text">Software and staffing solutions</p>
										<span className="thin-text">that drive success</span>
									</p>
								</div>
								<div className="buttons">
									<Button
										style="black"
										link=""
										text="Scale your team"
										wide={true}
										fontSize="1.125rem"
										icon={<CircleArrowSVG />}
									/>
									<Button
										style="clear"
										link=""
										text="Build your product"
										wide={true}
										fontSize="1.125rem"
										icon={<CircleArrowSVG />}
									/>
								</div>
							</div>
							<div className="right-column">
								<div className="img">
									<img src={imageSrc} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>{/* <Partners /> */}</section>
		</main>
	)
}

export default Home
