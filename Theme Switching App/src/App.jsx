import './App.css'
import ThemeToggle from './contexts/ThemeToggle'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemeComponent from './contexts/ThemedComponent'

function App() {
  

  return (
    <>
      <ThemeProvider>
        <div className="flex justify-center mb-4">
          <h1 className='text-2xl font-bold mb-4'>
            <ThemeToggle/>
            <ThemeComponent/>
          </h1>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
