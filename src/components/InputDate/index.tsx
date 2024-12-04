import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs }from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from 'dayjs'


interface PropsInputDate {
    onChange: (date: Dayjs | null) => void,
    controlledDate: Dayjs | null
}

export function InputDate({ onChange, controlledDate }: PropsInputDate) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={onChange} value={controlledDate}/> 
        </LocalizationProvider>
    )
}