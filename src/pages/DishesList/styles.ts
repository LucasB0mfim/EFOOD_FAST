import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  overflow: hidden;

  @media (max-width: ${breakpoints.notebook}) {
    padding: 120px 50px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 27px;
  }
`

export const Dishes = styled.div`
  max-width: 1240px;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  li {
    width: 320px;
    display: flex;
    justify-content: center;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
`

export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  border: 1px solid #888;
  border-radius: 8px;
  background-color: ${colors.red};
  transition: fadeIn 0.3s ease-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  span {
    position: absolute;
    top: 5%;
    right: 5%;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }

  > img {
    object-fit: cover;
    width: 280px;
    height: 280px;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.notebook}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 320px;
    flex-direction: column;

    > img {
      width: 100%;
      height: 190px;
    }
  }
`

export const IconClose = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  right: -30px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 24px;
`

export const Name = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 16px;
  }
`

export const Description = styled.p`
  margin: 16px 0;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
`

export const Btn = styled.button`
  width: 218px;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red};
  border: none;
  outline: none;
  background-color: ${colors.beige};
  cursor: pointer;
`
