import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@style'

export const renderStories = (component: ReactNode) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
)

export * from '@testing-library/react'
