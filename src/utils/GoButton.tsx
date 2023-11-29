import '../styles/GoButton.css'
import CircleSVG from './CircleSVG'

interface Props {
	text: string
	link: string
	style: string
}

const GoButton = ({ text, link, style }: Props) => {
	return (
		<a href={link} className={`go-button ${style}`}>
			{text}
			<CircleSVG />
		</a>
	)
}

export default GoButton
