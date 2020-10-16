import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@style'

const renderWithTheme = (component: ReactNode) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

export * from '@testing-library/react'
export { renderWithTheme as render }
