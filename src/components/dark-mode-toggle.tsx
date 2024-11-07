import { useDark } from '@/hooks/use-dark'
import { Button } from './ui/button'
import { LucideMoon, LucideSun } from 'lucide-react'

export function DarkModeToggle() {
  const { toggleDark } = useDark()

  return (
    <Button aria-label="toggle dark mode" size="icon" variant="ghost" onClick={toggleDark}>
      <LucideSun className="sun scale-100 dark:scale-0 transition-transform duration-500 rotate-0 dark:-rotate-90" />
      <LucideMoon className="moon absolute scale-0 dark:scale-100 transition-transform duration-500 rotate-90 dark:rotate-0" />
    </Button>
  )
}
