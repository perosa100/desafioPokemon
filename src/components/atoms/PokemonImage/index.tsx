import React from 'react'

import Image from 'next/image'

interface PokemonImageType {
	src: string
	layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
	width?: number
	height?: number
}

const PokemonImage = ({
	src,
	layout = 'fill',
	width,
	height
}: PokemonImageType) => (
	<Image src={src} layout={layout} width={width} height={height} />
)

export default PokemonImage
