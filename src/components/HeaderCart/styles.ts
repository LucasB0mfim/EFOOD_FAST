import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  display: flex;
  padding: 0 171px;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  span {
    color: ${colors.red};
    font-size: 18px;
    font-weight: 900;
    outline: none;
    height: auto;
  }

  > div {
    display: flex;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 140px;
    justify-content: space-between;
    height: 0;

    img {
      margin-right: 0px;
    }

    > div {
      align-items: center;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    height: 240px;

    > div {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

export const ARestaurant = styled.a`
  color: ${colors.red};
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Logo = styled.a`
  width: 125px;
  height: auto;
  color: ${colors.red};
  font-size: 18px;
  font-weight: 900;
  outline: none;
  height: 58px;
  display: flex;
  align-items: center;
  margin-right: -90px;

  img {
    width: 125px;
    height: 57.5px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: -115px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin: 0;
    justify-content: center;
  }
`

export const CartDesktop = styled.span`
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const CartMobile = styled.span`
  cursor: pointer;
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-right: -30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    margin-right: 0;
  }
`

export const TrashSolid = styled.img``
export const TrashGif = styled.img``

export const Btn = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    transition: opacity 0.3s;

    @media (max-width: ${breakpoints.tablet}) {
      left: 180%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      top: 160%;
      left: -120%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }

  ${TrashSolid} {
    opacity: 1;
  }

  ${TrashGif} {
    opacity: 0;
  }

  &:hover ${TrashSolid} {
    opacity: 0;
  }

  &:hover ${TrashGif} {
    opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 280px;
  box-shadow: 0px 5px 10px #000;

  @media (max-width: ${breakpoints.mobile}) {
    height: 200px;
  }
`

export const Banner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  padding: 32px 0;
`

export const Type = styled.span`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 170px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 22px;
    margin-left: 35px;
  }
`

export const Title = styled.span`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 170px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 35px;
  }
`

export const Image = styled.image`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(0.5);
`
