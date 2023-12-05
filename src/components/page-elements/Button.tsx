import '../../styles/Button.css'

interface Props {
	text: string
	link?: string
	style: string
	wide?: boolean
	fontSize?: string
	icon: React.ReactNode
}

const Button = ({ text, link, style, icon, wide, fontSize }: Props) => {
	return (
		<a href={link ?? ''} className={`button ${style} ${wide ? 'wide' : ''}`}>
			<div style={{ fontSize: fontSize ?? '' }}>{text}</div>
			{icon}
		</a>
	)
}

export default Button
