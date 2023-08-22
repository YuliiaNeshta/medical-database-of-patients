import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const statuses = ['New', 'Planned', 'In work', 'Refused', 'Orthodontics']

const StatusSelect = () => {
  const [status, setStatus] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof status>) => {
    const {
      target: { value },
    } = event
    setStatus(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Status</InputLabel>
        <Select
          multiple
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={status}
          label='Age'
          onChange={handleChange}
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default StatusSelect
