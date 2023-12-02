import '../../styles/Partners.css'

/*const PARTNER_NAMES = [
	'insightful',
	'calendly',
	'fox-vision',
	'solsea',
	'bizly',
	'shapa',
	'cart',
	'36px',
	'celsius',
	'cloud-horizon',
	'cloudberrie',
	'convert-more',
	'daon',
	'flythere',
	'fonduu',
	'growthmill',
	'hunch',
	'hurricane',
	'holywally',
	'janea',
	'rasa',
	'evermed-tv',
	'spotted-zebra',
	'vitamed',
	'wio'
]*/

const importPartnerLogos = (partners: any) => {
	return partners.keys().map(partners) as string[]
}

const Partners = () => {
	const partnerImages = importPartnerLogos(
		require.context('../../assets/images/partners/', false, /\.webp$/)
	)

	return (
		<div className="partners">
			{partnerImages.map((partner) => (
				<img src={partner} />
			))}
		</div>
	)
}

export default Partners
