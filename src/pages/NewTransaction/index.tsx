import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

import { FormControl, InputLabel, OutlinedInput, Radio, RadioGroup, FormLabel, FormControlLabel, Button } from '@mui/material'
import { showAlertSnackbar } from '../../redux/slices/alertSnackbarSlice'

import { NewTransactionContainer, NewTransactionContent } from './styles'
import * as colors from '@mui/material/colors'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs }from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

import { formatCurrencyRealTime } from '../../formats/formatCurrencyRealTime'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'


const schemaFormTransaction = zod.object({
    title: zod.string().min(5).max(80).regex(/^[A-Z][a-z]*$/, 'First letter must be capitalized and the rest lowercase'),
    value: zod.string().min(5).max(80),
    category: zod.string().min(5).max(80).regex(/^[A-Z][a-z]*$/, 'First letter must be capitalized and the rest lowercase'),
    date: zod.string(),
    type: zod.enum(['income', 'expense'])        
})

export type SchemaFormTransaction = zod.infer<typeof schemaFormTransaction> 

interface ErrorHandling {
    title?: {
        message: string
        type: string
    },

    category?: {
        message: string
        type: string
    },

    value?: {
        message: string
        type: string
    }
}

export function NewTransaction() {
    const dispatch = useDispatch()
    
    const methodsForm = useForm<SchemaFormTransaction>({
        resolver: zodResolver(schemaFormTransaction),
        defaultValues: {
            title: '',
            value: '',
            category: '',
            type: 'expense',
            date: new Date().toISOString()
        }
    })

    const { 
        register, 
        handleSubmit, 
        control,
        setValue,
        reset
    } = methodsForm
  
    function changeInputValue(event: ChangeEvent<HTMLInputElement>) {
        const rawValue = event.target.value
        const formattedValue = formatCurrencyRealTime(rawValue)
        setValue('value', formattedValue)
    }

    function onSubmit(data: SchemaFormTransaction) {
        //dispatch(addNewTransaction(data))
        dispatch(showAlertSnackbar({
            messageAlert: 'Transaction saved successfully',
            severity: 'success',
            variant: 'filled'
        }))

        reset()
    }

    function errorHandling(errors: ErrorHandling) {
        if(errors.title) {
            return dispatch(showAlertSnackbar({
                messageAlert: errors.title.message,
                severity: 'error',
                variant: 'filled'
            }))
        }
    }
    return (
        <NewTransactionContainer>
            <NewTransactionContent>
                <h1>New Transaction</h1>

                <form onSubmit={handleSubmit(onSubmit, (errors) => errorHandling(errors))}>
                    <FormControl>
                        <InputLabel htmlFor='title'>Title</InputLabel>
                        <OutlinedInput
                            id='title'
                            label='Title'
                            {...register('title')}
                        />
                    </FormControl>
                
                    <FormControl>
                        <InputLabel htmlFor='value'>Value</InputLabel>
                        <OutlinedInput
                            id='value'
                            label='Value'
                            {...register('value')}
                            onChange={changeInputValue}
                        />
                        
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor='category'>Category</InputLabel>
                        <OutlinedInput
                            id='category'
                            label='category'
                            {...register('category')}
                        />
                    </FormControl>
                
                    <Controller
                        control={control}
                        name='date'
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker value={dayjs(field.value)} onChange={field.onChange}/>
                            </LocalizationProvider>
                        )}
                    />
                
                    <FormControl>
                        <FormLabel id='type' >Type Transaction</FormLabel>
                        <Controller
                            name='type'
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    row
                                    aria-labelledby='type'
                                    value={field.value}
                                    onChange={field.onChange}
                                >
                                
                                    <FormControlLabel value='income' label='Income' control={<Radio/>}/>
                                    
                                    <FormControlLabel 
                                        value='expense'
                                        label='Expense'
                                        control={<Radio sx={{'&.Mui-checked': {color: colors.red[500]}}}/>}
                                    />
                                </RadioGroup>
                            )}
                        >
                        </Controller>
                    </FormControl>
                
                    <Button type='submit' variant='contained' size='large'>
                        Save
                    </Button>
                </form>            
            </NewTransactionContent>
        </NewTransactionContainer>
    )
}