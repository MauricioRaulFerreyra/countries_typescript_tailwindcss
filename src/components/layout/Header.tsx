import ThemeToggle from '../themeToggle/ThemeToggle'

const Header: React.FC = () => {
  return (
    <header className='bg-white dark:bg-gray-800 shadow-md dark:shadow-lg'>
      <div className='container mx-auto px-2 py-2 flex justify-between items-center'>
        <h1 className='text-xl font-bold text-gray-800 dark:text-white'>
          Países del Mundo
        </h1>
        {/* Apuí puedes implementar el ThemeToggle cuando lo agregues */}
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
