import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    @font-face {
      font-family: 'Spartan-bold';
      src: url('/fonts/Spartan/Spartan-bold.ttf') format('truetype'),
        url('/fonts/Spartan/Spartan-bold.svg#Spartanbold') format('svg');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Spartan-light';
      src:
        url('/fonts/Spartan/Spartan-light.ttf') format('truetype'),
        url('/fonts/Spartan/Spartan-light.svg#Spartanlight') format('svg');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Spartan-medium';
      src:
        url('/fonts/Spartan/Spartan-medium.ttf') format('truetype'),
        url('/fonts/Spartan/Spartan-medium.svg#Spartanmedium') format('svg');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Spartan-regular';
      src:
        url('/fonts/Spartan/Spartan-regular.ttf') format('truetype'),
        url('/fonts/Spartan/Spartan-regular.svg#Spartanregular') format('svg');
      font-weight: normal;
      font-style: normal;
    }

    @font-face {
      font-family: 'Spartan-semibold';
      src:
        url('/fonts/Spartan/Spartan-semibold.ttf') format('truetype'),
        url('/fonts/Spartan/Spartan-semibold.svg#Spartansemibold') format('svg');
      font-weight: bold;
      font-style: normal;
    }

    @font-face {
      font-family: 'Spartan-thin';
      src:
        url('/fonts/Spartan/Spartan-thin.ttf') format('truetype'),
        url('/fonts/Spartan/Spartan-thin.svg#Spartanthin') format('svg');
      font-weight: normal;
      font-style: normal;
    }
  }

  *::selection {
    background: ${props => props.theme.color.primary};
    color: #fff;
  }

  body {
    background: ${props => props.theme.color.background};
  }

`
