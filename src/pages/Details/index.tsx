import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { DetailsContainer, SearchContainer } from './styles'

import { Table } from './components/Table'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { Pagination } from '@mui/material'
import { Stack } from '@mui/material'


export function Details() {
    const [ loading, setLoading ] = useState(false)

    function handleClick() {
        setLoading(!loading)
    }

    return (
        <DetailsContainer>
            <SearchContainer>
                <FormControl>
                    <InputLabel htmlFor="search">Search transaction</InputLabel>
                    <OutlinedInput
                        size='small'
                        id="search"
                        defaultValue=""
                        label="Search transaction"
                    />
                </FormControl>

                <LoadingButton
                    size="medium"
                    onClick={handleClick}
                    endIcon={<Search/>}
                    loading={loading}
                    loadingPosition="end"
                    variant="contained"
                    >
                    Search
                </LoadingButton>
            </SearchContainer>
            
            <Table/>

            <Stack spacing={2} className='stack'>
                <Pagination count={10} variant='outlined' shape='rounded'/>
            </Stack>
        </DetailsContainer>
    )
}