import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/formSlice';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.query);

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="filter">Find contacts by name</InputLabel>
        <Input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default Filter;
