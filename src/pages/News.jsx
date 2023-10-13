import React from 'react'
import LayoutNews from '../layouts/LayoutNews';
import { Add, DateRange, FavoriteSharp, Language, Tag } from '@mui/icons-material';
import { Avatar, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import noImage from '../assets/no-image.jpg'
import { createTheme, ThemeProvider } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { useLocation } from 'react-router-dom';
import { addDataLiked, removeDataLiked } from '../redux/LikedNews/actionLiked';
import { useDispatch, useSelector } from 'react-redux';

const theme = createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
            darker: blue[900],
        },
        test: {
            light: grey[100],
            main: grey[500],
            dark: grey[700],
            darker: grey[900],
        }
    },
});

const Home = () => {
    const { state } = useLocation()
    const dispatch = useDispatch()
    const likedData = useSelector(state => state.likedNews)
    const [date] = React.useState(new Date(state.publishedAt))



    return (
        <ThemeProvider theme={theme}>
            <LayoutNews>
                <Container sx={{ display: { md: 'block', xs: 'none' } }} maxWidth="md">
                    <Grid marginTop={2} container spacing={3}>
                        <Grid item xs={9}>
                            <Stack borderRadius={3} sx={{ bgcolor: 'test.light' }} alignItems="center" justifyContent="center">

                                {/* TITLE */}

                                <Typography align='center' marginY={3} variant='h4'>
                                    {state.title}
                                </Typography>

                                {/* image */}

                                <img width="90%" src={state.urlToImage ? state.urlToImage : noImage} alt='hero-one' />

                                {/* Info */}

                                <Stack alignItems="center" direction="row" spacing={2}>
                                    <Stack direction="row" alignItems="center">
                                        <IconButton >
                                            <Language sx={{ width: 15 }} />
                                        </IconButton>
                                        <Typography variant='caption' color="text.secondary">Source : {state.source.name}</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center">
                                        <IconButton >
                                            <DateRange sx={{ width: 15 }} />
                                        </IconButton>
                                        <Typography variant='caption' color="text.secondary">Published : {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Typography>
                                    </Stack>
                                </Stack>

                                {/* news */}
                                <Typography marginX={5} marginY={3} align='start' variant='body1' color="text.secondary">
                                    {state.description}
                                </Typography>

                                <Typography marginX={5} marginY={3} align='start' variant='body1' color="text.secondary">
                                    {
                                        state?.content && state.content.split('[')[0]
                                    }
                                    <a href={state.url}>See More</a>
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={3}>
                            <Stack>
                                {
                                    likedData?.data?.map(item => item.url).includes(state.url) ?
                                    <Button onClick={() => dispatch(removeDataLiked(state.url)) }  variant="contained" startIcon={<FavoriteSharp />} color='error'>
                                        UNLIKE
                                    </Button>
                                    :
                                    <Button onClick={() => dispatch(addDataLiked(state)) } variant="contained" startIcon={<FavoriteSharp />} sx={{
                                        bgcolor: 'test.light', color: 'test.main', "&:hover": {
                                            backgroundColor: "transparent"
                                        }
                                    }}>
                                        LIKE
                                    </Button>
                                }
                            </Stack>
                            
                            <Stack borderRadius={3} marginTop={2} sx={{ backgroundColor: 'test.light', height: 65, padding: 2 }} direction="row" alignItems="center" spacing={2}>
                                <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" />
                                {state.author ?
                                <Stack spacing={1}>
                                    <Typography variant='h7'>{state.author.split(',')[0]}</Typography>
                                    <Button startIcon={<Add />} variant='contained' color='error' size='small'>Follow</Button>
                                </Stack>
                                :
                                <Stack spacing={1}>
                                    <Typography variant='h7'>No Author</Typography>
                                </Stack>
                                }
                            </Stack>

                            <Stack borderRadius={3} marginTop={2} sx={{ backgroundColor: 'test.light', padding: 2 }} spacing={2}>
                                <Stack direction="row">
                                    <Tag color='primary' />
                                    <Typography>Tags</Typography>
                                </Stack>
                                <Stack sx={{ width: 10 }} direction="row" spacing={1}>
                                    {['news', 'sports', 'Travel', 'luxury'].map((item) =>
                                        <Typography variant='caption'>{item}</Typography>
                                    )}
                                </Stack>


                            </Stack>
                        </Grid>
                    </Grid>

                </Container>
                <Container sx={{ display: { xs: 'block', md: 'none' } }} maxWidth="md">
                    <Grid marginTop={2} container spacing={3}>
                        <Grid item xs={12}>
                            <Stack borderRadius={3} alignItems="center" justifyContent="center">

                                {/* TITLE */}

                                <Typography align='center' marginY={3} variant='h4'>
                                    {state.title}
                                </Typography>

                                {/* image */}

                                <img width="90%" src={state.urlToImage ? state.urlToImage : noImage} alt='hero-one' />

                                {/* Info */}

                                <Stack direction="row" spacing={2}>
                                    <Stack direction="row" alignItems="center">
                                        <IconButton >
                                            <Language sx={{ width: 15 }} />
                                        </IconButton>
                                        <Typography variant='caption' color="text.secondary">{state.source.name}</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center">
                                        <IconButton >
                                            <DateRange sx={{ width: 15 }} />
                                        </IconButton>
                                        <Typography variant='caption' color="text.secondary">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</Typography>
                                    </Stack>
                                </Stack>

                                {/* news */}
                                <Typography marginX={5} marginY={3} align='start' variant='body2' color="text.secondary">
                                    {state?.description && state.description}
                                </Typography>
                                <Typography marginX={5} marginY={3} align='start' variant='body1' color="text.secondary">
                                    {
                                        state?.content && state.content.split('[')[0]
                                    }
                                    <a href={state.url}>See More</a>
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack>
                                {
                                    likedData?.data?.map(item => item.url).includes(state.url) ?
                                    <Button  onClick={() => dispatch(removeDataLiked(state.url)) } variant="contained" startIcon={<FavoriteSharp />} color='error'>
                                        UNLIKE
                                    </Button>
                                    :
                                    <Button onClick={() => dispatch(addDataLiked(state)) } variant="contained" startIcon={<FavoriteSharp />} sx={{
                                        bgcolor: 'test.light', color: 'test.main', "&:hover": {
                                            backgroundColor: "transparent"
                                        }
                                    }}>
                                        LIKE
                                    </Button>
                                }
                            </Stack>
                            <Stack borderRadius={3} marginTop={2} sx={{ backgroundColor: 'test.light', height: 65, padding: 2 }} direction="row" alignItems="center" spacing={2}>
                                <Avatar sx={{ width: 40, height: 40 }} alt="Remy Sharp" src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" />
                                {state.author ?
                                <Stack spacing={1}>
                                    <Typography variant='h7'>{state.author.split(',')[0]}</Typography>
                                    <Button startIcon={<Add />} variant='contained' color='error' size='small'>Follow</Button>
                                </Stack>
                                :
                                <Stack spacing={1}>
                                    <Typography variant='h7'>No Author</Typography>
                                </Stack>
                                }
                            </Stack>
                            <Stack borderRadius={3} marginTop={2} sx={{ backgroundColor: 'test.light', padding: 2 }} marginY={3} spacing={2}>
                                <Stack direction="row">
                                    <Tag color='primary' />
                                    <Typography>Tags</Typography>
                                </Stack>
                                <Stack sx={{ width: 10 }} direction="row" spacing={1}>
                                    {['news', 'sports', 'Travel', 'luxury'].map((item) =>
                                        <Typography variant='caption'>{item}</Typography>
                                    )}
                                </Stack>


                            </Stack>
                        </Grid>
                    </Grid>

                </Container>
            </LayoutNews>
        </ThemeProvider>
    )
}

export default Home