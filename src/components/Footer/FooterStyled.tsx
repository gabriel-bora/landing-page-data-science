import styled from 'styled-components'

const FooterStyled = styled.footer`
  width: 100vw;
  height: 40vh;
  margin-top: -5vh;
  background-color: #b0a4bf;
  color: #262626;
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
    font-weight: 500;
    color: #262626;
    font-family: 'Anek Latin', sans-serif;
    font-size: 1.3rem;
  }

  small {
    margin-left: 10px;
    color: #262626;
    font-family: 'Anek Latin', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: #262626;
    font-family: 'Anek Latin', sans-serif;
    font-size: 1.3rem;
  }

  .social-midias > a {
    font-size: 2.7rem;
    color: #262626;
    margin: 5px;
  }

  img {
    width: 14vw;
    margin-right: 7vw;
  }
`

export default FooterStyled
