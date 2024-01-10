import { Avatar, Box, IconButton, ListItem, ListItemAvatar, ListItemText} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const ItemList = ({title, cover}) => {
  return (
    <ListItem sx={{display: 'flex', justifyContent: 'space-between', mb: 1}}>
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <ListItemAvatar>
          <Avatar alt={title} src={cover}/>
        </ListItemAvatar>
        <ListItemText primary={title}></ListItemText>
      </Box>
      <Box sx={{display: 'flex'}}>
        <IconButton>
          <TipsAndUpdatesIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
}

export default ItemList;