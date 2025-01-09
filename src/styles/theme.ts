import { createTheme } from '@mui/material'
import '@mui/x-date-pickers/themeAugmentation'

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      white: string,

      'gray-200': string,
      'gray-400': string,
      'gray-600': string,
      'gray-800': string,

      'green-200': string,
      'green-400': string,
      'green-800': string,
      
      'orange-500': string,
      'red-500': string,
    },
  }
  interface PaletteOptions {
    customColors: {
      white: string,

      'gray-200': string,
      'gray-400': string,
      'gray-600': string,
      'gray-800': string,

      'green-200': string,
      'green-400': string,
      'green-800': string,

      'orange-500': string,
      'red-500': string,
    },
  }
}

export const theme = createTheme({
  palette: {
    customColors: {
      white: '#FFFFFF',

      'gray-200': '#e8e7e1',
      'gray-400': '#757772',
      'gray-600': '#535354',
      'gray-800': '#3f433e',

      'green-200':  '#adde34',
      'green-400':  '#275347',
      'green-800':  '#092c1c',
      'orange-500': '#f7a23f',
      'red-500':    '#ec1e1e'
    }
  },
  components: { 
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#092c1c',
          },
          '&.Mui-selected': {
            backgroundColor: '#092c1c',
            color: '#ffffff',
          },
        },
        today: {
          border: '1px solid #092c1c',
        },
      },
    },
  },
})
