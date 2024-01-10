import * as React from 'react';
import { useForm, Controller } from "react-hook-form"
import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CreateDeveloper = ({open, onClose}) => {
  const {control, handleSubmit, register} = useForm({});
  const onSubmit = (data) => console.log(data);

  return (
    <Dialog sx={{ m: 0}} onClose={onClose} open={open}>
      <Box sx={{p: 1}}>
        <Box sx={{display: 'flex', gap: '50px', justifyContent: 'space-between'}}>
          <DialogTitle>Разработчик</DialogTitle>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{display: 'flex', gap: '10px'}}>
            <Controller
              name='firstName'
              control={control}
              render={({field}) => <TextField fullWidth {...field} margin='dense' label='Имя'/>} />
            <Controller 
              name='lastName'
              control={control}
              render={({field}) =>  <TextField {...field} fullWidth margin='dense' label='Фамилия'/>}/>
            </Box>
            <Box sx={{mb: 1}}>
              <Controller 
                name='email'
                control={control}
                render={({field}) => <TextField {...field} fullWidth margin='dense' label='Email'/>}/>
              <Controller 
                name='telegramLink'
                control={control}
                render={({field}) =>  <TextField {...field} fullWidth margin='dense' label='Telegram'/>}/>
              <Controller 
                name='githubLink'
                control={control}
                render={({field}) =>   <TextField {...field} fullWidth margin='dense' label='Git hub'/>}/>
            </Box>
            <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
              Аватар
              <input hidden {...register('cover', {required: true})} type='file' />
            </Button>
            <Button type='submit' onClick={onClose}>Сохранить</Button>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
}

export default CreateDeveloper;