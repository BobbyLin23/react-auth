import { ModeToggle } from './components/mode-toggle'
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="text-2xl text-sky-500">Hello World</div>
      <Button>Click</Button>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App
