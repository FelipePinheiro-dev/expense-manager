import { GlobalStyles as Styles, useTheme } from '@mui/material'

export function GlobalStyles() {
  const { customColors } = useTheme().palette
  return (
    <Styles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },

        body: {
          fontFamily: 'Roboto',
        },

        '.resize': {
          position: 'absolute',
          opacity: 0,
          top: 0,
          right: 0,
          height: '100%',
          width: '3px',
          background: customColors['green-800'],
          cursor: 'col-resize',
          userSelect: 'none',
          touchAction: 'none',
          borderRadius: '6px',
        },
        '.resize.isResizing': {
          background: customColors['green-200'],
          opacity: 1,
        },
        '*:hover > .resize': {
          opacity: 1,
        },
      }}
    />
  )
}
