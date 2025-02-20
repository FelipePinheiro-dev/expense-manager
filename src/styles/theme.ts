import { createTheme } from '@mui/material'
import '@mui/x-date-pickers/themeAugmentation'

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      white: string
      black: string
      hover: string

      'gray-200': string
      'gray-400': string
      'gray-600': string
      'gray-800': string

      'green-200': string
      'green-400': string
      'green-800': string

      'orange-500': string
      'red-500': string
    }
  }
  interface PaletteOptions {
    customColors: {
      white: string
      black: string
      hover: string

      'gray-200': string
      'gray-400': string
      'gray-600': string
      'gray-800': string

      'green-200': string
      'green-400': string
      'green-800': string

      'orange-500': string
      'red-500': string
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#275347',
      dark: '#1b3a2e',
      light: '#3a6b5a',
      contrastText: '#FFFFFF',
    },
    customColors: {
      white: '#FFF',
      black: '#000',

      hover: '#F4F4F4',

      'gray-200': '#e8e7e1',
      'gray-400': '#757772',
      'gray-600': '#535354',
      'gray-800': '#3f433e',

      'green-200': '#adde34',
      'green-400': '#275347',
      'green-800': '#092c1c',
      'orange-500': '#f7a23f',
      'red-500': '#ec1e1e',
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'select' },
          style: {
            textTransform: 'capitalize',
            '&:hover': {
              backgroundColor: '#e8e7e1',
            },
          },
        },
      ],
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#e8e7e1',
          },
          '&.Mui-selected': {
            '&:hover': {
              backgroundColor: '#092c1c',
            },
            backgroundColor: '#092c1c',
            color: '#ffffff',
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#092c1c',
            color: '#ffffff',
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
