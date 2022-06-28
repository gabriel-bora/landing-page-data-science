import styled from 'styled-components'

const NavBarStyled = styled.header`
  width: 100%;
  height: 10vh;
  color: #fff;
  background-color: #262626;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;

  img {
    height: 80%;
    margin-left: 1rem;
  }

  Button {
    height: 70%;
    margin-left: 1rem;
    color: #fff;
  }

  .botaoAluno {
    background-color: #304ef2;
  }

  .botaoAluno:hover {
    background-color: #445ef2;
  }

  .divBotoes {
    margin-left: 60%;
  }
`

export default NavBarStyled
