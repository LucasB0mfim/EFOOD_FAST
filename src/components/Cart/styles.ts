import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`

export const SideBar = styled.div`
  background-color: ${colors.red};
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 8px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 280px;
  }

  label {
    color: ${colors.beige};
    font-size: 14px;
    font-weight: 700;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 12px;
    }
  }

  input {
    width: 100%;
    height: 32px;
    border: none;
    outline: none;
    background-color: ${colors.beige};
    padding-left: 5px;
    margin: 8px 0;

    &.error {
      border: 2px solid red;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 10px;
    }
  }

  p {
    color: ${colors.beige};
    font-size: 14px;
    margin-bottom: 10px;
  }

  #cep {
    @media (max-width: ${breakpoints.mobile}) {
      width: 90%;
    }
  }

  #cardNumber {
    @media (max-width: ${breakpoints.mobile}) {
      width: 90%;
    }
  }

  #expiresMonth {
    @media (max-width: ${breakpoints.mobile}) {
      width: 90%;
    }
  }
`

export const Dishes = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: ${colors.beige};
  margin-bottom: 16px;
`

export const DishesImage = styled.div`
  width: 80px;
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100px;

    > img {
      width: 100px;
    }
  }
`

export const Info = styled.div`
  height: 100%;
  padding-left: 8px;
`

export const Title = styled.h3`
  color: ${colors.red};
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const Price = styled.p`
  position: absolute;
  color: ${colors.red};
  font-size: 14px;
  font-weight: 400;
`

export const TrashButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  border: none;
  cursor: pointer;
  background-color: ${colors.beige};

  @media (max-width: ${breakpoints.mobile}) {
    bottom: 13px;
  }
`

export const Alert = styled.p`
  height: 100vh;
  color: ${colors.beige};
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`
  color: ${colors.red};
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background-color: ${colors.beige};
`

export const TotalPrice = styled.span`
  color: ${colors.beige};
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const DeliveyTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.beige};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`

export const Phase = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.beige};
`

export const DuoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.red};
  width: 100%;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background-color: ${colors.beige};
  margin: 16px 0 8px 0;
`
