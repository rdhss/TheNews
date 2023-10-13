import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Container, Input, Stack } from '@mui/material';
import { FavoriteSharp, Newspaper } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fethingData } from '../redux/News/action';



export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleToHome = async () => {
        dispatch(fethingData())
        navigate('/')
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => navigate('/profile')}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                        <FavoriteSharp />
                </IconButton>
                <p>Liked News</p>
            </MenuItem>
            <MenuItem onClick={() => navigate('/profile')}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color='' position="fixed">
                <Container maxWidth="md">
                    <Toolbar>
                        <Stack  direction='row' justifyContent='start' alignItems="center" spacing={1}>
                            <Newspaper onClick={handleToHome} color='primary' sx={{ display: { xs: 'none', sm: 'block' } }}/>
                            <Typography
                                onClick={handleToHome}
                                variant="h6"
                                noWrap
                                className='cursor-pointer'
                                component="div"
                                fontFamily={'Roboto'}
                                color='primary'
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                THE NEWS
                            </Typography>
                        </Stack>
                        <IconButton
                            size="small"
                            sx={{ display: { xs: 'block', sm: 'none' } }}

                            aria-label="show 17 new notifications"
                            color="primary"
                        >
                            <Newspaper onClick={handleToHome}/>
                        </IconButton>
                        {/* <Search > */}
                        <SearchBar />
                        {/* </Search> */}
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={() => navigate('/profile')}
                            >
                                <FavoriteSharp color='primary'/>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={() => navigate('/profile')}
                            >
                                <AccountCircle color='primary'/>
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>

                </Container>
            </AppBar>

            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}