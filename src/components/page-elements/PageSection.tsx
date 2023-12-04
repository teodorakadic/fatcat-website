import '../../styles/PageSection.css'

interface Props {
	leftColumnStyle?: {}
	rightColumnStyle?: {}
}

const PageSection = ({ leftColumnStyle, rightColumnStyle }: Props) => {
	return (
		<section className="section-wrapper">
			<div className="top-row"></div>
			<div className="mid-row">
				<div className="left-column" style={leftColumnStyle}></div>
				<div className="right-column" style={rightColumnStyle}></div>
			</div>
			<div className="bot-row"></div>
		</section>
	)
}

export default PageSection
