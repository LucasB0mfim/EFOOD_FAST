import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  a {
    width: 125px;
    height: 57.5px;
    margin-top: 40px;
  }

  img {
    width: 125px;
    height: 57.5px;
  }

  > h1 {
    margin-bottom: 40px;
    color: ${colors.red};
    font-size: 36px;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;

    > h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`
