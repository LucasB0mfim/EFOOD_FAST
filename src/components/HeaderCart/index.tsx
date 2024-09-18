import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import hero from '../../assets/images/background-hero.png'
import icon from '../../assets/images/icon.png'

import { useCart } from '../../Utils'

import * as S from './styles'

type Restaurant = {
  id: number
  tipo: string
  capa: string
  titulo: string
  avaliacao: string
  descricao: string
}

const HeaderCart = () => {
  const { cartCount, toggleCartVisibility } = useCart()
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  //
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurant[]) => {
        const selected = data.find((rest) => rest.id === Number(id))
        setRestaurant(selected || null)
      })
  }, [id])
  //
  return (
    <>
      <S.HeaderBar style={{ backgroundImage: `url(${hero})` }}>
        <S.ARestaurant href="/">Restaurantes</S.ARestaurant>
        <S.Logo href="/">
          <img src={icon} alt="icon" />
        </S.Logo>
        <div>
          <S.CartDesktop onClick={toggleCartVisibility}>
            {cartCount} produto(s) no carrinho
          </S.CartDesktop>
          <S.CartMobile onClick={toggleCartVisibility}>
            {cartCount} produto(s)
            <br />
            no carrinho
          </S.CartMobile>
        </div>
      </S.HeaderBar>
      <S.Container>
        <S.Image style={{ backgroundImage: `url(${restaurant?.capa})` }} />
        <S.Banner>
          <S.Type>{restaurant?.tipo}</S.Type>
          <S.Title>{restaurant?.titulo}</S.Title>
        </S.Banner>
      </S.Container>
    </>
  )
}

export default HeaderCart
