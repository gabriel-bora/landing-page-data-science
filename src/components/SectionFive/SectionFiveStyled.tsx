import styled from 'styled-components'

const SectionFiveStyled = styled.section`
  width: 100%;
  margin-top: -1vh;
  height: 100vh;
  background-color: #b0a4bf;
  transform: skewY(-2deg);
  position: relative;

  ::before {
    content: '';
    width: 100vw;
    position: absolute;
    left: 0;
    margin-top: -1vh;
    background: #262626;
    height: 61vh;
    top: 0;
  }

  .main {
    transform: skewY(2deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: 'Anek Latin', sans-serif;
    font-weight: 800;
    font-size: 2.2rem;
    padding-top: 15vh;
    color: #445ef2;
  }

  .cards {
    margin-top: 18vh;
    margin-left: -2vw;
    display: flex;
  }
`

export default SectionFiveStyled
