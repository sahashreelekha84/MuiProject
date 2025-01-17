import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
//import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
//import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
//import NatureIcon from '@mui/icons-material/Nature';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '../../Component/Drawer/Drawer';
const pages = ['Home','Product', 'About','Shop' ,'Contacts'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = (props) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <AppBar position="static" color='white'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            // href="#app-bar-with-responsive-menu"
                            sx={{
                                mr:0.6,
                                display: { xs: 'none', md: 'flex' },
                                fontSize:'10px',
                                fontFamily: '"Noto Sans", serif',
                                fontWeight: 700,
                                letterSpacing: '0 rem',
                                color: '#b2102f',
                                textDecoration: 'none',
                                
                            }}>
                            FRUIT 
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            // href="#app-bar-with-responsive-menu"
                            sx={{
                               
                                display: { xs: 'none', md: 'flex' },
                                fontSize:'10px',
                                fontFamily: '"Noto Sans", serif',
                                fontWeight: 700,
                                letterSpacing: '0 rem',
                                color: '#ffc107',
                                textDecoration: 'none',
                            }}>
                            STORE
                            
                        </Typography>
                        <FilterVintageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,fontSize:'20px' ,color:'#4caf50'}} />
                        
                        {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}>
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' ,m:5}}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            LOGO
                        </Typography> */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                          {pages.map((page) => (
                             <Button
                             key={page}
                             onClick={handleCloseNavMenu}
                             sx={{ px:3, color: 'black', display: 'block',fontSize:'10px'}}>
                             {page}
                           
                         </Button>
                            ))}
                           
                             <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,fontSize:'20px' ,color:'#4caf50'}} />  
                        </Box>
                     
                        {/* <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header
