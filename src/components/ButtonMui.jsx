import React from 'react'
import { Button, Stack } from '@mui/material'

const ButtonMui = (props) => {
  const { text, click } = props

  return (
    <>
      <Button  onClick={click} variant='contained'>{text}</Button>
    </>
  )
}

export default ButtonMui