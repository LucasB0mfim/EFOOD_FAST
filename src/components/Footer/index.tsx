import icon from '../../assets/images/icon.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterBar>
    <S.Icons>
      <a href="/">
        <img src={icon} />
      </a>
      <S.SocialMedia>
        <a href="#">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="Twitter" />
        </a>
      </S.SocialMedia>
    </S.Icons>
    <span>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </span>
  </S.FooterBar>
)

export default Footer
