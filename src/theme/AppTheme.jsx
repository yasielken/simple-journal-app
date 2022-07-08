import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { BlueTheme } from './';

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={BlueTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
