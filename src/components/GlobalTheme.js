import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  font: {
    family: {
      primary: "'Josefin Sans', sans-serif",
      secondary: "'nunito', sans-serif ",
    },
  },
  color: {
    grey: '#333333',
    red: '#8B0000',
    teal: '#0291b1',
    orange: '#FC8A4A',
  },
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
