import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  font: {
    family: {
      primary: "'Neoteric', sans-serif ",
      secondary: "'nunito', sans-serif ",
    },
  },
  color: {
    primary: '#333333',
    secondary: '#8B0000',
  },
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
