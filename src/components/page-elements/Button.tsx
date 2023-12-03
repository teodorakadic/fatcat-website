import '../../styles/Button.css'

interface Props {
	text: string
	link: string
	style: string
	icon: React.ReactNode
}

const Button = ({ text, link, style, icon }: Props) => {
	return (
		<a href={link} className={`button ${style}`}>
			{text}
			{icon}
		</a>
	)
}

export default Button
