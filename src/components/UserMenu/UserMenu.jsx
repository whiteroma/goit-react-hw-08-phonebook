import { StyledLink } from 'components/Layout/Layout.styled';
import { useLogOutUserMutation, useGetUserQuery } from 'UserApi/userApi';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';

export default function UserMenu() {
  const { data } = useGetUserQuery();
  const [anchorEl, setAnchorEl] = useState(null);
  const [logOutUser] = useLogOutUserMutation();

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOut = () => {
    logOutUser();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="nav" sx={{ flexGrow: 1 }}>
              <StyledLink to="/contacts">Contacts</StyledLink>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Typography variant="h6" component="h2">
                {data && data.name}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
