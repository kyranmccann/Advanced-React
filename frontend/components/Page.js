import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

injectGlobal `
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnika_medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    font-family: 'radnika_next';
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div `
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div `
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
    <StyledPage>
    <Meta />
    <Header />
      <Inner>{this.props.children}</Inner>
    </StyledPage>
    </ThemeProvider>
    )
  }
}

export default Page;
