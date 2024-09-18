import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 40px 0;
  }
`

export const Restaurants = styled.div`
  max-width: 1240px;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  li {
    width: 472px;
    margin: 16px;
    display: flex;
    justify-content: center;
  }
`
