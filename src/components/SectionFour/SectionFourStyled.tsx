import styled from 'styled-components'

const SectionFourStyled = styled.section`
  width: 100%;
  margin-top: -1vh;
  height: 175vh;
  background-color: #b0a4bf;
  transform: skewY(-2deg);

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
  }

  .accordions {
    margin-top: 7vh;
  }

  p {
    font-family: 'Anek Latin', sans-serif;
  }

  .MuiAccordionSummary-root,
  .MuiAccordionDetails-root {
    background-color: #b0a4bf;
  }

  .MuiAccordionSummary-root {
    margin-top: 3vh;
  }

  .tituloAccordion {
    font-weight: 600 !important;
  }

  .MuiAccordionSummary-root::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
    background-color: #000;
    background: linear-gradient(135deg, #304ef2, #7825f9);
  }
`

export default SectionFourStyled
