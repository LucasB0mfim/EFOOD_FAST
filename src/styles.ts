import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#FFF',
  red: '#E66767',
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2'
}

export const breakpoints = {
  mobile: '768px',
  tablet: '1200px',
  notebook: '1440px'
}

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;

  body {
    background-color: ${colors.lightBeige};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

}
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const MainContent = styled.main`
  flex: 1;
`
