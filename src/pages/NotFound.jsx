import React from 'react'
import LayoutNews from '../layouts/LayoutNews';
import notfound from '../assets/404.png'
import notfound2 from '../assets/oops.png'
import { Container, Stack } from '@mui/material';

const NotFound = () => {

  return (
    <LayoutNews>
      <Container maxWidth="sm">
        <Stack marginY={15} justifyContent="center">
          <img src={notfound} alt="" />
          <img src={notfound2} alt="" />
        </Stack>
      </Container>
    </LayoutNews>
  )
}

export default NotFound