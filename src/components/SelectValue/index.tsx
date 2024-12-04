import { FormControl, SelectChangeEvent } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select } from '@mui/material'
import {  forwardRef} from 'react'

type Value = {
    value: string
    name: string
}

interface PropsSelect {
    label: string,
    items: Value[],
    disable?: boolean,
    value: string,
    onChange: (event: SelectChangeEvent<string>) => void
}

export const SelectValue = forwardRef(function SelectValue({label, items, disable, value, onChange}: PropsSelect, ref) {
    return (
        <FormControl sx={{width: '100%'}} variant='standard'>
            <InputLabel id='select' >{label}</InputLabel>
            <Select
                labelId='select'
                id='select'
                label={label}
                disabled={disable}
                inputRef={ref}
                onChange={onChange}
                value={value}
            >   
                { items &&
                    items.map((item, index) => (
                        <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
})