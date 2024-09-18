import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, colors } from '../../styles'

export const Card = styled(Link)`
  display: block;
  position: relative;
  width: 472px;
  color: ${colors.red};
  text-decoration: none;
  background-color: ${colors.white};
  cursor: pointer;

  > img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    filter: brightness(0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 320px;
    height: auto;

    > img {
      height: 167px;
    }
  }
`

export const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 26px;
  padding: 6px 4px;
  margin-left: 8px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  color: ${colors.beige};
  background-color: ${colors.red};
`

export const BorderRed = styled.div`
  border-right: 1px solid ${colors.red};
  border-bottom: 1px solid ${colors.red};
  border-left: 1px solid ${colors.red};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
  }
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
`

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 8px 8px 8px;

  ${Title} {
    margin-top: 4px;
  }
`

export const Note = styled.div`
  display: flex;
  align-items: center;

  > img {
    height: 21px;
    width: 21px;
    margin-left: 8px;
  }
`

export const Description = styled.p`
  max-height: 118px;
  height: 118px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
  padding: 0 8px 8px 8px;

  @media (max-width: ${breakpoints.mobile}) {
    max-height: 190px;
    height: auto;
  }
`

export const Btn = styled.button`
  width: 82px;
  height: 24px;
  margin: 8px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  outline: none;
  color: ${colors.beige};
  background-color: ${colors.red};
  cursor: pointer;
`
