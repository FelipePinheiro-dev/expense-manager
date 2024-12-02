import { ModalDateRangeContainer, boxStyle, divInputStyle, spanInputStyle} from './styles'
import { useState } from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Modal } from '@mui/material'
import { InputDate } from '../InputDate'

export function ModalDateRange() {
  const [ open, setOpen ] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <ModalDateRangeContainer>
        <Button 
          variant='contained'
          onClick={handleOpen}
        >
          Choose a date range
        </Button>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={boxStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Select a date range
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                See only transactions within specific dates
              </Typography>

              <Typography sx={divInputStyle}>
                <Typography sx={spanInputStyle}>
                  <span>Start date</span>
                  <InputDate/>
                </Typography>
                
                <Typography sx={spanInputStyle}>
                  <span>End date</span>
                  <InputDate/>
                </Typography>
              </Typography>
            </Box>
        </Modal>
    </ModalDateRangeContainer>
  )
}