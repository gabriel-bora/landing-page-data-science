import styled from 'styled-components'

interface SectionOneProps {
  urlImagem: string
}

const SectionOneStyled = styled.section<SectionOneProps>`
  width: 100%;
  height: 105vh;
  color: #fff;
  background-image: url(${(props) => props.urlImagem});
  background-position: center;
  position: relative;
  transform: skewY(-2deg);

  .main {
    position: absolute;
    top: 20vh;
    left: 10vh;
    width: 35%;
    transform: skewY(2deg);
  }

  .formacao {
    display: flex;
  }

  h3 {
    font-family: 'Courier New', Courier, monospace;
    color: #445ef2;
    font-size: 1.8rem;
    overflow: hidden;
    width: 13ch;
    white-space: nowrap;
    box-shadow: 0.5em 0 0 0 #ffffff;
    animation: caret 0.5s step-end infinite alternate, type 5s steps(13, end);
  }

  h1 {
    font-family: 'Anek Latin', sans-serif;
    font-size: 4rem;
    font-weight: 800;
    color: #445ef2;
    margin-top: 10px;
  }

  p {
    margin-top: 15px;
    margin-left: 27px;
    font-size: 1.2rem;
    font-family: 'Anek Latin', sans-serif;
    font-weight: 400;
  }

  img {
    position: absolute;
  }

  @keyframes type {
    0% {
      width: 0;
    }
  }

  @keyframes caret {
    50% {
      box-shadow: 0.5em 0 0 transparent;
    }
  }
`

export default SectionOneStyled
