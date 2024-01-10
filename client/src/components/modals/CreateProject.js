import * as React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Controller, useForm } from 'react-hook-form';

const CreateProject = ({open, onClose}) => {
  const {control, handleSubmit, register} = useForm({});
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <Dialog sx={{ m: 0}} onClose={onClose} open={open}>
      <Box sx={{p: 1}}>
        <Box sx={{display: 'flex', gap: '50px', justifyContent: 'space-between'}}>
          <DialogTitle>Проект</DialogTitle>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller 
              name='title'
              control={control}
              render={({field}) => <TextField {...field} fullWidth margin='dense' label='Заголовок'/>}/>
            <Box sx={{mb: 1}}>
              <Controller 
                name='description'
                control={control}
                render={({field}) =>  <TextField {...field} fullWidth margin='dense' label='Описание'/>}/>
              <Controller 
                name='contentVideo'
                control={control}
                render={({field}) =>  <TextField {...field} fullWidth margin='dense' label='ссылка на видео'/>}/>
              <Controller 
                name='githubLink'
                control={control}
                render={({field}) =>  <TextField {...field} fullWidth margin='dense' label='Git hub'/>}/>
            </Box>
            <Box sx={{display: "flex", gap: '10px'}}>
              <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
                Обложка
                <input {...register('cover')} hidden type='file' />
              </Button>
              <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
                Картинка поста
                <input {...register('contentImg')} hidden type='file' />
              </Button>
              <Button type='submit' onClick={onClose}>Сохранить</Button>
            </Box>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
}

export default CreateProject;