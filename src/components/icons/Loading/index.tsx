import Lottie, { Options, LottieProps } from 'react-lottie'

import LoadAnimation from '@assets/animations/loading'
import styled from 'styled-components'

import Theme from '@themes/default'

const Wrapper = styled.p`
	color: ${Theme.color.background};
`

type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>

interface LoadingProps {
	height?: string | number
	width?: string | number
	options?: Options
}

interface Loading extends SimpleSpread<LottieProps, LoadingProps> {}

const Loading = ({ width, height, options, ...props }: Loading) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: LoadAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<Wrapper>
			<Lottie
				options={options || defaultOptions}
				width={width ?? 150}
				height={height ?? 25}
				{...props}
			/>
		</Wrapper>
	)
}

export default Loading
