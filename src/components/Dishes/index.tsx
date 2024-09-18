import * as S from './styles'

type Props = {
  id: number
  thumbnail: string
  name: string
  price: number
  description: string
  portion: string
  onToggleModal: (id: number) => void
}

const Dishes = ({ id, thumbnail, name, description, onToggleModal }: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 250) + '...'
    }

    return text
  }

  return (
    <S.Card>
      <img src={thumbnail} alt={name} />
      <S.Title>{name}</S.Title>
      <S.Description>{getDescription(description)}</S.Description>
      <S.Btn onClick={() => onToggleModal(id)}>Mais detalhes</S.Btn>{' '}
    </S.Card>
  )
}

export default Dishes
