import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Home() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? (
    <Box
      sx={{
        mt: 10,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Create, edit or delete contacts in a few clicks
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 3,
          mb: 5,
        }}
      >
        {' '}
        <Typography variant="h6" sx={{}}>
          Manage your contacts in the Contacts section
        </Typography>
      </Box>
      <Button
        sx={{ width: 240, height: 40 }}
        href="/contacts"
        variant="contained"
      >
        <Typography variant="h7" sx={{ textAlign: 'center' }}>
          Contacts
        </Typography>
      </Button>
    </Box>
  ) : (
    <Box
      sx={{
        mt: 10,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          display: 'flex',
        }}
      >
        Get started with{' '}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mr: 1,
            ml: 1,
          }}
          color="primary"
        >
          Phonebook
        </Typography>{' '}
        in a few steps
      </Typography>
      <Box sx={{ m: 5 }}>
        <Button
          sx={{ width: 160, height: 40 }}
          href="/signup"
          variant="contained"
        >
          Sign Up
        </Button>
        <Button
          sx={{ width: 160, ml: 4, height: 40 }}
          href="/login"
          variant="contained"
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
}
