import React, { useContext, useState } from 'react';
import { Context } from '../index';
import Button from '@mui/material/Button';
import { Box, Container, List, Paper, Typography } from '@mui/material';
import CreateDeveloper from '../components/modals/CreateDeveloper';
import CreateProject from '../components/modals/CreateProject';
import ItemList from '../components/listItem/ItemList';

const Admin = () => {
  const {project: projectStore} = useContext(Context);
  const {posts} = projectStore;
  
  const [developerDialogVisible, setdeveloperDialogVisible] = useState(false);
  const [postDialogVisible, setpostDialogVisible] = useState(false);


  return (
    <Container component="main" maxWidth ="sm"
      sx={{
        mb: 2,
        mt: 3
    }}>
      <Paper sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 },display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
        <Box>
          <Typography variant='h4' component="h2" mb={6} align='center'>Панель администратора</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', mb: 4}}>
            <Box sx={{display: 'flex'}}>
              <Button sx={{mr: 2}} variant="contained" onClick={() => setdeveloperDialogVisible(true)}>Редактировать разработчика</Button>
              <Button variant="contained" color='error'>Выйти</Button>
            </Box>
            <Button sx={{mt: 1}} onClick={() => setpostDialogVisible(true)} fullWidth variant='contained'>Добавить проект</Button>
          </Box>
          <Box>
            <Typography variant='h6' component='h6' align='center' sx={{mb: 2, mt: 3}}>Проекты</Typography>
            <Paper>
              <List>
                {posts.map(({title, cover, id}) => <ItemList key={id} title={title} cover={cover} />)}
              </List>
            </Paper>
          </Box>
        </Box>
      </Paper>
      <CreateDeveloper open={developerDialogVisible} onClose={() => setdeveloperDialogVisible(false)}/>
      <CreateProject open={postDialogVisible} onClose={() => setpostDialogVisible(false)}/>

    </Container>
  );
}

export default Admin;