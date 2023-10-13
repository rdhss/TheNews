import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import noImage from '../assets/no-image.jpg'
import { Stack } from '@mui/material';


export default function RecipeReviewCard(props) {
  const { onclick, DetailNews } = props
  const [date] = React.useState(new Date(DetailNews.publishedAt))

  return (
    <div className='full-height' onClick={onclick}>
      <Card className='cursor-pointer' sx={{ maxWidth: 445 }}>
        <CardContent >
          <Stack
            borderRadius={3}
            overflow="hidden"
          >
            <CardMedia
              sx={{height : 120}}
              component="img"
              image={DetailNews.urlToImage ? DetailNews.urlToImage : noImage}
              alt=""
            />
          </Stack>
          <Typography marginY={1} variant="body1" >
            {DetailNews?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {DetailNews?.description?.slice(0, 50) + '...'}
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="end">
            <Typography marginY={1} variant='caption' color="text.secondary">Source : {DetailNews?.source.name}</Typography>
          </Stack>
          <Stack
            className='bg-grey'
            padding={1}
            borderRadius={5}
            marginTop={1}
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            sx={{ height: 50 }} >
            <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" />
            <Stack justifyContent="center">
              <p className='profile-card-text '>{DetailNews?.author === null ? 'No Author' : DetailNews?.author?.split(',')[0]}</p>
              <p className='profile-card-text '>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
            </Stack>
            <IconButton aria-label="settings">
              {/* <FavoriteIcon color="error" /> */}
            </IconButton>
          </Stack>
        </CardContent>

      </Card>
    </div>
  );
}