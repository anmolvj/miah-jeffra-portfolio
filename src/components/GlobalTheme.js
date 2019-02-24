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
    grey: '#333333',
    red: '#8B0000',
    cyan: '#01657C',
  },
}

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
