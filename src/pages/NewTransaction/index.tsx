import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, Controller, FieldErrors } from 'react-hook-form'

import { FormControl, InputLabel, OutlinedInput, Radio, RadioGroup, FormLabel, FormControlLabel, Button, Select, MenuItem } from '@mui/material'
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
import { AppDispatch } from '../../redux/store'
import { CATEGORIES } from '../../constants/categories'

const schemaFormTransaction = zod.object({
    title: zod.string().min(2).max(80).regex(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/, 'First letter must be capitalized and the rest lowercase'),
    value: zod.string().min(2).max(80),
    category: zod.enum(['Studies', 'Leisure', 'Business', 'Clothings', 'Food', 'Sports', 'Utilities']),
    date: zod.string(),
    type: zod.enum(['income', 'expense'])        
})

export type SchemaFormTransaction = zod.infer<typeof schemaFormTransaction> 

export function NewTransaction() {
    const dispatch = useDispatch<AppDispatch>()
    
    const methodsForm = useForm<SchemaFormTransaction>({
        resolver: zodResolver(schemaFormTransaction),
        defaultValues: {
            title: '',
            value: '',
            category: 'Utilities',
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

        if(errors.date) {
            return dispatch(showAlertSnackbar({
                messageAlert: String(errors.date.message),
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

                    <Controller
                        control={control}
                        name='category'
                        render={({ field }) => (
                            <FormControl>
                                <InputLabel id="category" htmlFor='category'>Category</InputLabel>
                                <Select
                                    id='category'
                                    label='category'
                                    value={field.value}
                                    {...register('category')}
                                >
                                    {CATEGORIES.map((category) => (
                                        <MenuItem key={category.value} value={category.value}> {category.name} </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}
                    />
                   
                      
                    <Controller
                        control={control}
                        name='date'
                        render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    value={dayjs(field.value)} 
                                    onChange={(value) => field.onChange(value?.toISOString())}
                                />
                            </LocalizationProvider>
                        )}
                    />

                    <Controller
                        control={control}
                        name='type'
                        render={({ field }) => (
                            <FormControl>
                                <FormLabel id='type' >Type Transaction</FormLabel>
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
                            </FormControl>
                        )}
                    />
   
                    <Button type='submit' variant='contained' size='large'>
                        Save
                    </Button>
                </form>            
            </NewTransactionContent>
        </NewTransactionContainer>
    )
}