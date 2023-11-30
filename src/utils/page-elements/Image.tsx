import '../../styles/Image.css'

interface Props {
	src: string
	shape?: string
}

const Image = ({ src, shape }: Props) => {
	return (
		<picture>
			<img src={src} className={`image ${shape}`} />
		</picture>
	)
}

export default Image
