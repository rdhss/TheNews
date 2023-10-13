import React, { useEffect, useState } from 'react'
import { Box, CircularProgress, Container, Grid, Pagination, Stack, Typography } from '@mui/material';
import CardNews from './CardNews'
import { useNavigate } from 'react-router-dom';


const ContainerCard = (props) => {
    const { title, icon, dataNews } = props
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(15)

    useEffect(() => {
        setData(dataNews?.data);
    }, [dataNews])

    const navigate = useNavigate()
    const lastPostpage = currentPage * postsPerPage;
    const firstPostIndex = lastPostpage - postsPerPage;
    const currentPost = data?.slice(firstPostIndex, lastPostpage);
    let r = (Math.random() + 1).toString(36).substring(7);

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    return (
        <div>
            <Container maxWidth="md">
                <Stack marginY={3} direction="row" alignItems="center" spacing={1} >
                    {icon}
                    <Typography variant='h6'>{title}</Typography>
                </Stack>
                {dataNews.loading ?
                    <Box justifyContent="center" sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    :
                    <Grid sx={{height : '100%'}} container justifyContent="center" spacing={2}>
                        {
                            currentPost?.length === 0 ?
                            <Typography>No News You like</Typography>
                            :
                            currentPost?.map((items) =>
                                <Grid sx={{height : '100%'}} flexGrow={4} item md={4}>
                                    <CardNews DetailNews={items} onclick={() => navigate(`/news/${r}`, { state: items })} />
                                </Grid>
                            )
                        }
                    </Grid>
                }


                <Stack marginY={3}>
                    <Pagination onChange={handleChange} count={Math.ceil(data?.length / postsPerPage)} />
                </Stack>
            </Container>
        </div>
    )
}

export default ContainerCard