import { TextField } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateTimePicker, DatePicker, LocalizationProvider } from '@mui/x-date-pickers'

const BirthDate = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label='Birth Date'
        // value={x.birthDate}
        // disabled={grantorDisabled[i].disableGrantor}
        // onChange={(e) => handleDateChangeEx(e, i)}
      />
    </LocalizationProvider>
  )
}

export default BirthDate
