import React from 'react'
import { ButtonContainer } from './styles'

export default function Button({label, onClick, style}) {
  return (
    <ButtonContainer onClick={onClick} style={style}>
      {label}
    </ButtonContainer>
  )
}
