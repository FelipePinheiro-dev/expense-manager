import { FormControl, InputLabel, OutlinedInput, Radio, RadioGroup, FormLabel, FormControlLabel, Button } from '@mui/material'
import { NewTransactionContainer, NewTransactionContent } from './styles'
import { InputDate } from '../../components/InputDate'
import { SelectValue } from '../../components/SelectValue'
import * as colors from '@mui/material/colors'
import { CATEGORIES } from '../../constants/categories'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { Dayjs } from 'dayjs'
import { useDispatch } from 'react-redux'
import { addNewTransaction } from '../../redux/slices/transactionsSlice'

const schemaFormTransaction = zod.object({
    title: zod.string().min(5).max(80),
    value: zod.number(),
    category: zod.enum(['Studies', 'Leisure', 'Work', 'Clothings', 'Food', 'Sports', 'Utilities']),
    date: zod.date(),
    type: zod.enum(['Entries', 'Expense'])        
})

export type SchemaFormTransaction = zod.infer<typeof schemaFormTransaction> 

export function NewTransaction() {
    const dispatch = useDispatch()

    const [ controlledDate, setControlledDate ] = useState<Dayjs | null>(null)
    
    const methodsRelatedFrom = useForm<SchemaFormTransaction>({
        resolver: zodResolver(schemaFormTransaction),
        defaultValues: {
            category: 'Studies',
            type: 'Expense'
        }
    })

    const { register, handleSubmit, control, setValue } = methodsRelatedFrom

    function onSubmit(data: SchemaFormTransaction) {
        dispatch(addNewTransaction(data))
    }

    function handleChangeDate(date: Dayjs | null) {
        setControlledDate(date)
        if(date === null) return 
        setValue('date', date.toDate())
    }

    return (
        <NewTransactionContainer>
            <NewTransactionContent>
                <h1>New Transaction</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='default'>
                        <FormControl>
                            <InputLabel htmlFor='title'>Title</InputLabel>
                            <OutlinedInput
                                id='title'
                                label='Title'
                                {...register('title')}
                            />
                        </FormControl>
                
                        <span className='select'>
                            <Controller
                                name='category'
                                control={control}
                                render={({ field }) => (
                                    <SelectValue
                                        {...field}
                                        label='Category'
                                        items={CATEGORIES}  
                                    />
                                )}
                            />
                        </span>
                    </div>
                    
                    <div className='default'>
                        <FormControl>
                            <InputLabel htmlFor='value'>Value</InputLabel>
                            <OutlinedInput
                                id='value'
                                label='Value'
                                {...register('value', {valueAsNumber: true})}
                            />
                        </FormControl>
                    
                        <InputDate onChange={handleChangeDate} controlledDate={controlledDate}/>
                    </div>

                    <div>
                        <FormControl>
                            <FormLabel id='type' >Type Transaction</FormLabel>
                            <Controller
                                name='type'
                                control={control}
                                render={({ field }) => (
                                    <RadioGroup
                                        {...field}
                                        row
                                        aria-labelledby='type'
                                    >
                                    
                                    <FormControlLabel 
                                        value='Entries'
                                        control={<Radio/>} 
                                        label='Entries'
                                    />
                                    
                                    <FormControlLabel 
                                        value='Expense'
                                        control={<Radio sx={{'&.Mui-checked': {color: colors.red[500]}}}/>}
                                        label='Expense'
                                    />
                            </RadioGroup>
                                )}
                            >

                            </Controller>
                        </FormControl>
                    </div>
                    
                    <div className='newtransaction'>
                        <Button variant='outlined' type='submit'>
                            Send new transaction
                        </Button>
                    </div>
                </form>                
            </NewTransactionContent>
        </NewTransactionContainer>
    )
}