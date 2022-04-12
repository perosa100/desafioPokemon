/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const Wrapper = styled.div`
	--white: #fff;
	--google-blue: #4285f4;
	--button-active-blue: #1669f2;

	.google-btn {
		width: 184px;
		height: 42px;
		background-color: var(--google-blue);
		border-radius: 2px;
		box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
		cursor: pointer;
		.google-icon-wrapper {
			position: absolute;
			margin-top: 1px;
			margin-left: 1px;
			width: 40px;
			height: 40px;
			border-radius: 2px;
			background-color: var(--white);
		}
		.google-icon {
			position: absolute;
			margin-top: 11px;
			margin-left: 11px;
			width: 18px;
			height: 18px;
		}
		.btn-text {
			float: right;
			margin: 11px 11px 0 0;
			color: var(--white);
			font-size: 14px;
			letter-spacing: 0.2px;
			font-family: ${props => props.theme.fonts.medium};
		}
		&:hover {
			box-shadow: 0 0 6px var(--google-blue);
		}
		&:active {
			background: var(--button-active-blue);
		}
	}

	@import url(https://fonts.googleapis.com/css?family=Roboto:500);
`
interface IGoogle {
	text?: string
	onClick: () => Promise<void>
	[props: string]: any
}

const Google = ({ text, ...props }: IGoogle) => {
	return (
		<Wrapper {...props}>
			<link
				type="text/css"
				href="//fonts.googleapis.com/css?family=Open+Sans"
			/>
			<div className="google-btn">
				<div className="google-icon-wrapper">
					<img
						className="google-icon"
						src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
						alt="google button"
					/>
				</div>
				<p className="btn-text">
					<b>{text ?? 'Entrar com Google'}</b>
				</p>
			</div>
		</Wrapper>
	)
}

export default Google
