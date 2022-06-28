import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Avatar } from '@mui/material'
import CardStyled from './CardStyled'

interface CardProps {
  nome: string
  foto: string
}

const CardDepoimento: React.FC<CardProps> = ({ nome, foto }) => {
  return (
    <CardStyled>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Avatar alt="" src={foto} sx={{ width: 72, height: 72 }} />
          <p>
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam delectus amet tenetur doloribus, numquam odit, expedita
            maiores deleniti commodi aliquid laborum similique temporibus dolore
            velit iste ab dolorem ut minus.&quot;
          </p>
          <h2>{nome}</h2>
        </CardContent>
      </Card>
    </CardStyled>
  )
}

export default CardDepoimento
