import { useTheme } from '../../context/ThemeContext'

function ThemeToggle (): JSX.Element {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className=' p-2 rounded-full bg-gray-200 dark:bg-gray-700'
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
