import { Box, Button, Grid, TextField } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import BirthDate from '../../components/Form/BirthDate'
import PhoneNumber from '../../components/Form/PhoneNumber'
import Gender from '../../components/Form/Gender'
import StatusSelect from '../../components/StatusSelect'

const AddNewPatient: FC = () => {
  const handleSubmit = () => {}
  const handleOnChange = () => {}

  return (
    <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField margin='normal' required fullWidth label='Name' name='name' />
      <TextField margin='normal' required fullWidth name='surname' label='Surname' />
      <TextField margin='normal' required fullWidth name='address' label='Address' />
      <TextField margin='normal' required fullWidth label='Email' name='email' />
      <TextField label='Notes' multiline rows={4} defaultValue='Notes' />
      <BirthDate />
      <PhoneNumber handleOnChange={handleOnChange} />
      <Gender />
      <StatusSelect />
      <Grid>
        <Link to='/'>
          <Button variant='contained' sx={{ mt: 3, mb: 2 }}>
            Undo
          </Button>
        </Link>
        <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
          Save
        </Button>
      </Grid>
    </Box>
  )
}

export default AddNewPatient
