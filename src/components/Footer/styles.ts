import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterBar = styled.footer`
  width: 100%;
  height: 298px;
  background-color: ${colors.beige};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    color: ${colors.red};
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    line-height: 11.72px;
    margin-bottom: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    justify-content: center;

    span {
      margin: 32.5px 0 32.5px 0;
      font-size: 7px;
    }
  }
`
export const Icons = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    height: 58px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 32.5px 0 0 0;
  }
`

export const SocialMedia = styled.div`
  width: 88px;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32.5px;

  > a {
    height: 24px;
    width: 24px;
  }

  img {
    height: 24px;
    width: 24px;
  }
`
