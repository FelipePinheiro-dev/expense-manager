import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller, FieldErrors } from 'react-hook-form'

import { FormControl, InputLabel, OutlinedInput, Radio, RadioGroup, FormLabel, FormControlLabel, Button } from '@mui/material'
import { showAlertSnackbar } from '../../redux/slices/alertSnackbarSlice'

import { NewTransactionContainer, NewTransactionContent } from './styles'
import { createNewTransaction } from '../../redux/slices/transactionsSlice'
import * as colors from '@mui/material/colors'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs }from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

import { formatCurrencyRealTime } from '../../formats/formatCurrencyRealTime'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { AppDispatch, RootState } from '../../redux/store'


const schemaFormTransaction = zod.object({
    title: zod.string().min(5).max(80).regex(/^[A-Z][a-z]*$/, 'First letter must be capitalized and the rest lowercase'),
    value: zod.string().min(2).max(80),
    category: zod.string().min(3).max(80).regex(/^[A-Z][a-z]*$/, 'First letter must be capitalized and the rest lowercase'),
    date: zod.string(),
    type: zod.enum(['income', 'expense'])        
})

export type SchemaFormTransaction = zod.infer<typeof schemaFormTransaction> 

export function NewTransaction() {
    const transactions = useSelector<RootState>((state) => state.transactions.transactions)
    const dispatch = useDispatch<AppDispatch>()
    
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
        reset,
        formState
    } = methodsForm
    
    const { isSubmitting } = formState

    function changeInputValue(event: ChangeEvent<HTMLInputElement>) {
        const rawValue = event.target.value
        const formattedValue = formatCurrencyRealTime(rawValue)
        setValue('value', formattedValue)
    }

    async function onSubmit(data: SchemaFormTransaction) {
        // Remove os separadores de milhares (.)
        const cleanValue = data.value.replace(/\./g, '')
        // Substitui a vírgula decimal (,) por ponto (.)
        const normalizedValue = cleanValue.replace(',', '.')
        // Converte para número
        const valueAsNumber = parseFloat(normalizedValue)
        const newValue = { value: valueAsNumber }
        const newData = Object.assign(data, newValue)
        await dispatch(createNewTransaction(newData))
        
        dispatch(showAlertSnackbar({
            messageAlert: 'Transaction saved successfully',
            severity: 'success',
            variant: 'filled'
        }))
        reset()
    }

    function errorHandling(errors: FieldErrors) {
        if(errors.title) {
            return dispatch(showAlertSnackbar({
                messageAlert: String(errors.title.message),
                severity: 'error',
                variant: 'filled'
            }))
        }

        if(errors.value) {
            return dispatch(showAlertSnackbar({
                messageAlert: String(errors.value.message),
                severity: 'error',
                variant: 'filled'
            }))
        }

        if(errors.category) {
            return dispatch(showAlertSnackbar({
                messageAlert: String(errors.category.message),
                severity: 'error',
                variant: 'filled'
            }))
        }
        
    }

    console.log(transactions)
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
                
                    <Button type='submit' variant='contained' size='large' disabled={isSubmitting}>
                        Save
                    </Button>
                </form>            
            </NewTransactionContent>
        </NewTransactionContainer>
    )
}