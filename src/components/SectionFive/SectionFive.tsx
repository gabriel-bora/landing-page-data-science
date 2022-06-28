import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import CardDepoimento from '../Card/Card'
import SectionFiveStyled from './SectionFiveStyled'
import img1 from '../../assets/depoimento1.jpg'
import img2 from '../../assets/depoimento2.jpg'
import img3 from '../../assets/depoimento3.jpg'
import img4 from '../../assets/depoimento4.jpg'

const SectionFive: React.FC = () => {
  return (
    <SectionFiveStyled>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="main">
          <h1>Depoimentos</h1>
          <div className="cards">
            <CardDepoimento foto={img1} nome="Yuri Fernandes" />
            <CardDepoimento foto={img2} nome="Clarice Rocha" />
            <CardDepoimento foto={img3} nome="Bryan Monteiro" />
            <CardDepoimento foto={img4} nome="Raquel Silveira" />
          </div>
        </div>
      </AnimationOnScroll>
    </SectionFiveStyled>
  )
}

export default SectionFive
