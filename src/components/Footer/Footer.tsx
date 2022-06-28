import * as React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FooterStyled from './FooterStyled'
import logoRoxo from '../../assets/JustRight-color.png'

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="copyright-links">
        <nav>
          <ul>
            <li>
              <Link to="/#">Sobre</Link>
            </li>
            <li>.</li>
            <li>
              <Link to="/#">Contato</Link>
            </li>
            <li>.</li>
            <li>
              <Link to="/#">Termos de Uso</Link>
            </li>
          </ul>
        </nav>
        <small>&copy; JustRight 2022. Todos os direitos reservados.</small>
      </div>

      <div>
        <img src={logoRoxo} alt="" />
      </div>

      <div className="social-midias">
        <Link to="/#">
          <BsGithub />
        </Link>
        <Link to="/#">
          <BsLinkedin />
        </Link>
      </div>
    </FooterStyled>
  )
}

export default Footer
