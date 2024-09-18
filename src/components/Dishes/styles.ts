import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: auto;
  padding: 8px;
  background-color: ${colors.red};

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    filter: brightness(0.8);
  }
`

export const Title = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 900;
  color: ${colors.beige};
`

export const Description = styled.p`
  padding: 8px 0;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.beige};
`

export const Btn = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red};
  background-color: ${colors.beige};
  cursor: pointer;
`
