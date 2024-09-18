import hero from '../../assets/images/background-hero.png'
import icon from '../../assets/images/icon.png'

import * as S from './styles'

const Header = () => (
  <S.HeaderBar style={{ backgroundImage: `url(${hero})` }}>
    <a href="/">
      <img src={icon} />
    </a>
    <h1>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </h1>
  </S.HeaderBar>
)

export default Header
