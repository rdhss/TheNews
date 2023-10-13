import React from 'react'
import NavbarMui from '../components/Navbar'
import { Stack } from '@mui/material'
import footer from '../assets/left-footer.svg'
const LayoutNews = ({ children }) => {

    return (
        <>
            <NavbarMui />
            <Stack marginTop={7}>
                {children}
            </Stack>
            <Stack sx={{display : { xs : 'none', sm : 'block'}}} marginY={3}>
                <img width="90%" src={footer} alt='hero-one' />
            </Stack>
        </>
    )
}

export default LayoutNews