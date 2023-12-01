import '../../styles/Partners.css'

const importPartnerLogos = (partners: any) => {
	return partners.keys().map(partners) as string[]
}

// const partner_logos = importPartnerLogos()

const Partners = () => {
	const partnerImages = importPartnerLogos(
		require.context('../../images/partners/', false, /\.webp$/)
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
