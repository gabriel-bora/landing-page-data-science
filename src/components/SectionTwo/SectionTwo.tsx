import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import SectionTwoStyled from './SectionTwoStyled'
import google from '../../assets/google.png'
import ebay from '../../assets/ebay.png'
import paypal from '../../assets/paypal.png'
import uber from '../../assets/uber-seeklogo.png'
import deloitte from '../../assets/deloitte-logo-0.png'
import nestle from '../../assets/logo-nestle-1024.png'
import avatar1 from '../../assets/1.jpg'
import avatar2 from '../../assets/2.jpg'
import avatar3 from '../../assets/3.jpg'

const steps = [
  {
    label: 'Primeiro Módulo',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium eius odit quas dolorem dolor sunt velit numquam odio
    earum, ea nisi nihil harum animi fugit natus quod eos!
    Perspiciatis, illum? Reiciendis corporis nostrum odit molestiae
    nesciunt, atque, repudiandae veritatis excepturi.`,
    avatar: `${avatar1}`,
    name: 'John Smith',
    title: 'Head of Data Science',
  },
  {
    label: 'Segundo Módulo',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Laudantium eius odit quas dolorem dolor sunt velit numquam odio
      earum, ea nisi nihil harum animi fugit natus quod eos!
      Perspiciatis, illum? Reiciendis corporis nostrum odit molestiae
      nesciunt, atque, repudiandae veritatis excepturi.`,
    avatar: `${avatar2}`,
    name: 'Carl Finnick',
    title: 'Engenheiro de Software',
  },
  {
    label: 'Terceiro Módulo',
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium eius odit quas dolorem dolor sunt velit numquam odio
    earum, ea nisi nihil harum animi fugit natus quod eos!
    Perspiciatis, illum? Reiciendis corporis nostrum odit molestiae
    nesciunt, atque, repudiandae veritatis excepturi.`,
    avatar: `${avatar3}`,
    name: 'Anna Lamela',
    title: 'CEO JustRight',
  },
]

const SectionTwo: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <SectionTwoStyled>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="main">
          <div className="divEmpresas">
            <h1>Empresas Parceiras</h1>
            <div className="empresas">
              <img src={google} alt="" />
              <img src={ebay} alt="" />
              <img src={paypal} alt="" />
              <img src={uber} alt="" />
              <img src={deloitte} alt="" />
              <img src={nestle} alt="" />
            </div>
          </div>
          <Box sx={{ maxWidth: 500 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography className="final" variant="caption">
                          Final
                        </Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <div className="divProf">
                      <Avatar
                        src={step.avatar}
                        sx={{ width: 56, height: 56 }}
                      />
                      <div>
                        <Typography className="nome">{step.name}</Typography>
                        <Typography>{step.title}</Typography>
                      </div>
                    </div>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Anterior
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>Agora só falta receber o certificado!</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Voltar
                </Button>
              </Paper>
            )}
          </Box>
        </div>
      </AnimationOnScroll>
    </SectionTwoStyled>
  )
}

export default SectionTwo
