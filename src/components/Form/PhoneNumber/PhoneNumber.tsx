import { FC } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number'
import { PhoneNumberProps } from './types'

const PhoneNumber: FC<PhoneNumberProps> = ({ handleOnChange }) => {
  return <MuiPhoneNumber defaultCountry={'ua'} onChange={handleOnChange} />
}

export default PhoneNumber
