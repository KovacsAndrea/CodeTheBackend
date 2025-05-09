import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MessageIcon from '@mui/icons-material/Message';
import { NavBarPageList } from '../../constants/dataSets';
import { useGlobalState } from '../../../globalStateProvider';

const pages = NavBarPageList

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const {setCurrentPage} = useGlobalState();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigateToPage = (pagePath: string) => {
    setAnchorElNav(null);
    setCurrentPage(pagePath)
  };

  const handleChatWithInkerman = () => {
    setCurrentPage('/no283')
  };

  return (
    <AppBar position="fixed" color='transparent' sx ={{boxShadow: 'none'}}>
      <Container maxWidth = {false} sx = {{padding: {phones: '0 1rem 0 1rem', desktops: '0 3.5rem 0 3.5rem'}, width: '100%'}}>
        <Toolbar disableGutters>
          {/* LOGO FOR DESKTOPS ONLY */}
          <Typography
            variant="h5"
            
            noWrap
            component="a"
            onClick={() => {setCurrentPage("/welcome")}}
            sx={{
              mr: 2,
              display: { phones: 'none', desktops: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              '&:hover': {
                color: 'rgb(38, 54, 143)',
                cursor: 'pointer'
              }
            }}
          >
            NO. 283
          </Typography>

          {/* THREE LINES LEFT MENU ITEM FOR PHONES ONLY */}
          <Box sx={{ flexGrow: 1, display: { phones: 'flex', desktops: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx= {{color: 'white'}}
            >
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
              sx={{ display: { phones: 'block', desktops: 'none' }, 
                  '& .MuiPaper-root': {
                  backgroundColor: 'black',
                  color: 'white',
              }}}
            >
              {pages.map((page) => (
                <MenuItem key={page.pageName} onClick={() =>handleNavigateToPage(page.pagePath)}>
                  <Typography sx={{ textAlign: 'center' }}>{page.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* LOGO FOR PHONES ONLY  */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { phones: 'flex', desktops: 'none' },
              flexGrow: 1,
              fontFamily: 'Cal Sans',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
            onClick={() => {setCurrentPage('/welcome')}}
          >
            NO. 283
          </Typography>

          {/* LONG MENU FOR DESKTOPS */}
          <Box sx={{ flexGrow: 1, display: { phones: 'none', desktops: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.pageName}
                onClick={() => handleNavigateToPage(page.pagePath)}
                
                sx={{ my: 2, 
                  color: 'white', 
                  display: 'block',
                  fontSize: '1.05rem',
                  mt: '1.2rem'
                 }}
              >

                {page.pageName}
                
              </Button>
            ))}
          </Box>

          {/* CHAT WITH INKERMAN */}
          <Box sx={{ flexGrow: 0}}>
              <IconButton onClick={handleChatWithInkerman} size="large">
                <MessageIcon sx={{ color: 'white' }} />
              </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;