import styled from 'styled-components'

const CardStyled = styled.div`
  transform: skewY(-2deg);

  .MuiPaper-root {
    background-color: #445ef2;
    overflow: visible;
    height: 45vh;
    width: 20vw;
    margin-left: 2vw;
    word-break: break-word;
  }

  .MuiCardContent-root {
    transform: skewY(2deg);
  }

  .MuiAvatar-root {
    transform: translateY(-8vh);
  }

  p {
    margin-top: -2vh;
  }

  h2 {
    margin-top: 5vh;
  }
`

export default CardStyled
