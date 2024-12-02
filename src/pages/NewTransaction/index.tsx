import { FormControl, InputLabel, OutlinedInput, Radio, RadioGroup, FormLabel, FormControlLabel, Button } from '@mui/material'
import { NewTransactionContainer, NewTransactionContent } from './styles'
import { InputDate } from '../../components/InputDate'
import { SelectValue } from '../../components/SelectValue'
import * as colors from '@mui/material/colors'

export function NewTransaction() {
    const category = [
        {value: 'studies', name: 'Studies'},
        {value: 'leisure', name: 'Leisure'}
    ]

    return (
        <NewTransactionContainer>
            <NewTransactionContent>
                <h1>New Transaction</h1>

                <form action="">
                    <div className='default'>
                        <FormControl>
                            <InputLabel htmlFor="title">Title</InputLabel>
                            <OutlinedInput
                                id="title"
                                defaultValue=""
                                label="Title"
                            />
                        </FormControl>

                        <SelectValue items={category} label='Category'/>
                    </div>
                    
                    <div className='default'>
                        <FormControl>
                            <InputLabel htmlFor="value">Value</InputLabel>
                            <OutlinedInput
                                id="value"
                                defaultValue=""
                                label="Value"
                            />
                        </FormControl>

                        <InputDate/>
                    </div>

                    <div>
                        <FormControl>
                            <FormLabel id="type" >Type Transaction</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="type"
                                name="type-radio"
                            >
                                
                                <FormControlLabel 
                                    value="entries" 
                                    control={<Radio/>} 
                                    label="Entries" 
                                />
                                
                                <FormControlLabel 
                                    value="expense" 
                                    control={<Radio sx={{'&.Mui-checked': {color: colors.red[500]}}}/>}
                                    label="Expense" 
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    
                    <div>
                        <Button variant='outlined'>
                            Send new transaction
                        </Button>
                    </div>
                </form>
            </NewTransactionContent>
        </NewTransactionContainer>
    )
}