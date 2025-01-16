import { GlobalStyles, useTheme } from '@mui/material'

export function GlobalCss() {
    const theme = useTheme()

    return (
        <GlobalStyles
        styles={{
            '.table': {
            borderCollapse: 'collapse',
            },
            '.td': {
                border: `1px solid ${theme.palette.customColors['gray-600']}`,
            },
            '.th': {
                border: '1px solid red',
            }
        }}
        />
    )
}