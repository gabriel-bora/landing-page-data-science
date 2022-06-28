import React from 'react'
import SectionOneStyled from './SectionOneStyled'
import fundo from '../../assets/Untitled-1.jpg'

const SectionOne: React.FC = () => {
  return (
    <SectionOneStyled urlImagem={fundo}>
      <div className="main">
        <h3>Formação em _</h3>
        <h1>Data Science</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ligula urna, tincidunt nec scelerisque ut, faucibus a enim. In quis
          magna feugiat, feugiat justo et, ultricies nisl. Fusce maximus ex id
          arcu cursus, vitae dapibus nibh vestibulum. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Integer eleifend lacus lorem, ac maximus erat vulputate eu. Donec
          pharetra varius mauris id luctus. Vivamus sagittis pellentesque
          turpis, ut.
        </p>
      </div>
    </SectionOneStyled>
  )
}

export default SectionOne
