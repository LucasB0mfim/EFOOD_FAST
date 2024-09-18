import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Restaurant from '../../components/Restaurant'

import * as S from './styles'
import Loader from '../../components/Loader'

const RestaurantList = () => {
  const [restaurant, setRestaurant] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setRestaurant(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      <S.Container>
        {loading ? (
          <Loader />
        ) : (
          <S.Restaurants>
            <ul>
              {restaurant.map((data) => (
                <li key={data.id}>
                  <Restaurant
                    id={data.id}
                    thumbnail={data.capa}
                    category={data.tipo}
                    name={data.titulo}
                    note={data.avaliacao}
                    description={data.descricao}
                  />
                </li>
              ))}
            </ul>
          </S.Restaurants>
        )}
      </S.Container>
    </>
  )
}

export default RestaurantList
