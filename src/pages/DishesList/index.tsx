import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Dishes from '../../components/Dishes'
import HeaderCart from '../../components/HeaderCart'
import Loader from '../../components/Loader'
import close from '../../assets/images/fechar.png'

import { useCart } from '../../Utils'

import * as S from './styles'

type Dish = {
  id: number
  foto: string
  nome: string
  preco: number
  descricao: string
  porcao: string
}

type Restaurant = {
  id: number
  tipo: string
  capa: string
  titulo: string
  avaliacao: string
  descricao: string
  cardapio: Dish[]
}

const DishesList = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [look, setLook] = useState(false)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const { addToCart } = useCart()
  const { toggleCartVisibility } = useCart()
  //
  useEffect(() => {
    window.scrollTo(0, 0) // Adicionado para rolar a página para o topo quando o componente for montado
  }, [])
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
  const toggleModal = (dish: Dish) => {
    setSelectedDish(dish)
    setLook(true)
  }
  //
  const closeModal = () => {
    setLook(false)
    setSelectedDish(null)
  }
  //
  const addDishesAndCloseModal = () => {
    if (selectedDish) {
      addToCart(selectedDish)
      closeModal()
      toggleCartVisibility()
    }
  }
  //
  return (
    <>
      <HeaderCart />
      <S.Container>
        {restaurant ? (
          <S.Dishes>
            <ul>
              {restaurant.cardapio.map((dish) => (
                <li key={dish.id}>
                  <Dishes
                    id={dish.id}
                    thumbnail={dish.foto}
                    name={dish.nome}
                    price={dish.preco}
                    description={dish.descricao}
                    portion={dish.porcao}
                    onToggleModal={() => toggleModal(dish)}
                  />
                </li>
              ))}
            </ul>
          </S.Dishes>
        ) : (
          <Loader />
        )}
        {look && selectedDish && (
          <S.Modal className="modal" onClick={closeModal}>
            <S.ModalContent className="modal-content">
              <span className="close" onClick={closeModal}>
                <S.IconClose src={close} alt="Fechar" />
              </span>
              <img src={selectedDish.foto} alt={selectedDish.nome} />
              <S.Infos>
                <S.Name>{selectedDish.nome}</S.Name>
                <S.Description>{selectedDish.descricao}</S.Description>
                <S.Description>Serve: {selectedDish.porcao}</S.Description>
                <S.Btn onClick={addDishesAndCloseModal}>
                  Adicionar ao carrinho - R$ {selectedDish.preco}
                </S.Btn>
              </S.Infos>
            </S.ModalContent>
          </S.Modal>
        )}
      </S.Container>
    </>
  )
}

export default DishesList
