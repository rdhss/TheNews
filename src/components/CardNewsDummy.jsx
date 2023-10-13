import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import test from '../assets/carDemo.png'
import { Stack } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const { onclick, DetailNews } = props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div onClick={onclick}>
      <Card className='cursor-pointer' sx={{ maxWidth: 445 }}>
        <CardContent >
          <Stack
            borderRadius={3}
            overflow="hidden"
          >
            <CardMedia
              component="img"
              image={test}
              alt="Paella dish"
            />
          </Stack>
          <Typography marginY={1} variant="body1" >
            {"Opening Day of Boating Season".slice(0, 29)}{"Opening Day of Boating Season".length > 29 ? '...' : null}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {"This impressive paella is a perfect party dish and a fun meal to cook together with your guests".slice(0, 100) + '...'}
          </Typography>
          <Typography>{DetailNews.id}</Typography>
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
              <p className='profile-card-text '>James</p>
              <p className='profile-card-text '>August 18 , 2022</p>
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