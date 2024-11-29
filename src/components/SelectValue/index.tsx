import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Select, SelectChangeEvent } from '@mui/material'
import { Box } from '@mui/material'
import { useState } from 'react'

type Value = {
    value: string
    name: string
}

interface PropsSelect {
    label: string,
    items: Value[]
}

export function SelectValue({label, items}: PropsSelect) {
    const [ value, setValue ] = useState('')
    
    function handleChangeCategory(event: SelectChangeEvent) {
        setValue(event.target.value)
    }
    return (
        <Box sx={{width: '10rem'}}>
            <FormControl fullWidth variant='standard'>
                <InputLabel id='select'>{label}</InputLabel>
                <Select
                    labelId='select'
                    id='select'
                    label='Category'
                    value={value}
                    onChange={handleChangeCategory}
                >   
                    { items &&
                        items.map((item) => (
                            <MenuItem value={item.value}>{item.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    )
}