import React from 'react'
import Button from '@mui/material/Button'
import { Menu, MenuItem } from '@mui/material'
import NavBarStyled from './NavBarStyled'
import logo from '../../assets/JustRight.png'

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <NavBarStyled>
      <img src={logo} alt="" />
      <div className="divBotoes">
        <Button
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          CURSOS
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Full Stack</MenuItem>
          <MenuItem onClick={handleClose}>DevOps</MenuItem>
          <MenuItem onClick={handleClose}>UX/UI</MenuItem>
          <MenuItem onClick={handleClose}>Data Science</MenuItem>
          <MenuItem onClick={handleClose}>Mobile</MenuItem>
          <MenuItem onClick={handleClose}>IA</MenuItem>
        </Menu>
        <Button variant="text">SOBRE</Button>
        <Button className="botaoAluno" variant="contained">
          SOU ALUNO
        </Button>
      </div>
    </NavBarStyled>
  )
}

export default NavBar
