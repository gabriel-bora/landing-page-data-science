import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import SectionThreeStyled from './SectionThreeStyled'
import fundo2 from '../../assets/Untitled-2.jpg'

const SectionThree: React.FC = () => {
  return (
    <SectionThreeStyled urlImagem={fundo2}>
      <AnimationOnScroll animateOnce animateIn="animate__fadeInLeftBig">
        <div className="main">
          <div className="video">
            <iframe
              width="624"
              height="351"
              src="https://www.youtube.com/embed/ss72QGVNTJg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="vidro">
            <h1>Conheça o mercado</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque <span>R$3 Bilhões</span> ligula urna, tincidunt nec
              scelerisque ut, faucibus a enim. In quis magna feugiat, feugiat
              justo et, ultricies nisl. Fusce maximus ex id arcu cursus, vitae
              dapibus nibh vestibulum. Vestibulum ante ipsum primis in faucibus
              orci luctus et. Pellentesque ligula urna, tincidunt nec
              scelerisque ut, faucibus a enim. Vestibulum ante ipsum primis in
              faucibus orci luctus et.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
    </SectionThreeStyled>
  )
}

export default SectionThree
