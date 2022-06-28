import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import SectionFive from '../components/SectionFive/SectionFive'
import SectionFour from '../components/SectionFour/SectionFour'
import SectionOne from '../components/SectionOne/SectionOne'
import SectionThree from '../components/SectionThree/SectionThree'
import SectionTwo from '../components/SectionTwo/SectionTwo'

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
  )
}

export default Home
