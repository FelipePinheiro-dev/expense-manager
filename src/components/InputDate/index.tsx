import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs }from '@mui/x-date-pickers/AdapterDayjs'

export function InputDate() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker/>
        </LocalizationProvider>
    )
}