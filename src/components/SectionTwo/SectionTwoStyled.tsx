import styled from 'styled-components'

const SectionTwoStyled = styled.section`
  width: 100%;
  height: 170vh;
  color: #262626;
  background-color: #b0a4bf;
  position: relative;
  transform: skewY(-2deg);

  .main {
    transform: skewY(2deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .divEmpresas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: 'Anek Latin', sans-serif;
    font-weight: 800;
    font-size: 2.2rem;
    margin-top: 15vh;
  }

  .empresas {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 7vh;
  }

  .empresas img {
    width: 11%;
    height: fit-content;
  }

  .MuiStepContent-root {
    margin-left: 1.8vw;
  }

  .MuiBox-root {
    margin-top: 15vh;
  }

  .MuiStepConnector-line {
    margin-left: 12px;
  }

  .Mui-completed {
    color: #bf9b6f !important;
  }

  p {
    font-family: 'Anek Latin', sans-serif;
    font-weight: 400;
    color: #262626;
    margin-left: 3vw;
  }

  svg {
    width: 3rem;
    height: 3rem;
  }

  .divProf {
    display: flex;
    margin-left: 2vw;
    margin-top: 3vh;
    padding-top: 3vh;
    border-top: 1px solid #262626;
  }

  .dadosProf {
    margin-top: 4vh;
    margin-left: 2vw;
  }

  .MuiPaper-root {
    background-color: #262626;
    margin-top: 5vh;
  }

  .MuiPaper-root > p {
    color: #fff;
  }

  .MuiPaper-root > button {
    color: #bf9b6f;
  }

  .Mui-active {
    color: #bf9b6f !important;
  }

  .MuiStepLabel-label {
    color: #262626 !important;
    font-family: 'Anek Latin', sans-serif;
    font-weight: 800 !important;
    font-size: 1.5rem;
    margin-left: 1vw;
  }

  text {
    font-family: 'Anek Latin', sans-serif;
    font-weight: 600;
  }

  .nome {
    font-family: 'Anek Latin', sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
  }

  .final {
    margin-left: 2vw;
  }

  .MuiButton-contained {
    background-color: #bf9b6f !important;
    color: #262626 !important;
  }

  .MuiButton-text {
    color: #262626;
  }
`

export default SectionTwoStyled
