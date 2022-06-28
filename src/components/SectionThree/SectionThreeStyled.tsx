import styled from 'styled-components'

interface SectionThreeProps {
  urlImagem: string
}

const SectionThreeStyled = styled.section<SectionThreeProps>`
  width: 100%;
  margin-top: -1vh;
  height: 120vh;
  background-image: url(${(props) => props.urlImagem});
  background-position: center;
  transform: skewY(-2deg);

  .main {
    transform: skewY(2deg);
    position: relative;
  }

  iframe {
    border: none;
  }

  .vidro {
    position: absolute;
    width: 60%;
    height: 80vh;
    right: 8%;
    top: 22vh;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .video {
    position: absolute;
    z-index: 99;
    top: 37vh;
    left: 8%;
  }

  h1 {
    font-family: 'Anek Latin', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: #445ef2;
    margin-top: 4vh;
  }

  p {
    font-family: 'Anek Latin', sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: #445ef2;
    margin-left: 50%;
    text-align: end;
    margin-right: 8%;
    margin-top: 9vh;
  }

  span {
    font-family: 'Anek Latin', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #445ef2;
    margin-right: 2px;
  }
`

export default SectionThreeStyled
