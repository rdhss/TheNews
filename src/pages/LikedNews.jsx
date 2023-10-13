import React from 'react'
import HeroProfile from '../assets/05.svg'
import LayoutNews from '../layouts/LayoutNews';
import ContainerCardLiked from '../components/ContainerCardLiked';
import {  EditNote, Person, StarBorder } from '@mui/icons-material';
import { Avatar, Container, IconButton, Stack, Typography } from '@mui/material';
import Navigation from '../components/Navigation'
import { useSelector } from 'react-redux';


const LikedNews = () => {
    const likeNews = useSelector(state => state.likedNews)


    return (
        <LayoutNews>
            <Container className='bg-grey' maxWidth="md" sx={{ display : { xs : 'none', md : 'block'}, marginTop: 5, padding: 2, borderRadius: 4 }}>
                <img width="100%" src={HeroProfile} alt='hero-one' />
                <Stack justifyContent="space-between" direction="row" marginY={4}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" />
                        <Typography variant='h6'>Demo User</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Stack direction="row" alignItems="center">
                            <IconButton >
                                <StarBorder sx={{ width: 15 }} />
                            </IconButton>
                            <Typography variant='caption' color="text.secondary">Rate : 5.0</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <IconButton >
                                <Person sx={{ width: 15 }} />
                            </IconButton>
                            <Typography variant='caption' color="text.secondary">Followers : 10K</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <IconButton >
                                <EditNote sx={{ width: 15 }} />
                            </IconButton>
                            <Typography variant='caption' color="text.secondary">Posting : 10</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Container className='bg-grey' maxWidth="md" sx={{ display : { xs : 'block', md : 'none'}, marginTop: 5, padding: 2, borderRadius: 4 }}>
                <Stack justifyContent="center" alignItems="center" marginY={4}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" />
                        <Typography variant='h6'>Demo User</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Stack alignItems="center" justifyContent="center">
                            <IconButton >
                                <StarBorder sx={{ width: 15 }} />
                            </IconButton>
                            <Typography variant='caption' color="text.secondary">Rate</Typography>
                            <Typography variant='caption' color="text.secondary">5.0</Typography>
                        </Stack>
                        <Stack  alignItems="center">
                            <IconButton >
                                <Person sx={{ width: 15 }} />
                            </IconButton>
                            <Typography variant='caption' color="text.secondary">Followers</Typography>
                            <Typography variant='caption' color="text.secondary"> 10K</Typography>
                        </Stack>
                        <Stack alignItems="center">
                            <IconButton >
                                <EditNote sx={{ width: 15 }} />
                            </IconButton>
                            <Typography variant='caption' color="text.secondary">Posting</Typography>
                            <Typography variant='caption' color="text.secondary">10</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Container maxWidth="md">
            <Navigation/>
            </Container>
            <ContainerCardLiked  title="" icon="" dataNews={likeNews}/>
        </LayoutNews>
    )
}

export default LikedNews