import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './app/theme'
import { GlobalStyles } from './app/global-styles'
import { Navigation } from './components/navigation'
import { HomeLayout } from './components/home-layout'


function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Navigation mode={theme} onSwitchMode={themeToggler}/>
        <HomeLayout/>
      </ThemeProvider>
    </>
  )
}

export default App
