import { StyledLink } from 'components/Layout/Layout.styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function AuthNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="nav"
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}
          >
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Log in</StyledLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
