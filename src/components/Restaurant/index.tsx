import star from '../../assets/images/star.png'

import * as S from './styles'

type Props = {
  id: number
  category: string
  thumbnail: string
  name: string
  note: string
  description: string
}

const Restaurant = ({
  id,
  category,
  thumbnail,
  name,
  note,
  description
}: Props) => {
  return (
    <S.Card
      title={`Clique aqui para ver os pratos do restaurante ${name}`}
      to={`/product/${id}`}
    >
      <img src={thumbnail} alt={name} />
      <S.Tag>{category}</S.Tag>
      <S.BorderRed>
        <S.Center>
          <S.Title>{name}</S.Title>
          <S.Note>
            <S.Title>{note}</S.Title>
            <img src={star} />
          </S.Note>
        </S.Center>
        <S.Description>{description}</S.Description>
        <S.Btn>Saiba mais</S.Btn>
      </S.BorderRed>
    </S.Card>
  )
}

export default Restaurant
