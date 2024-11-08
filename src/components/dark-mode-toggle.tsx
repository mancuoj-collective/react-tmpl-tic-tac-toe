import { useDark } from '@/hooks/use-dark'
import { Button } from './ui/button'
import { RiMoonLine, RiSunLine } from '@remixicon/react'

export function DarkModeToggle() {
  const { toggleDark } = useDark()

  return (
    <Button aria-label="toggle dark mode" size="icon" variant="ghost" onClick={toggleDark}>
      <RiSunLine className="sun scale-100 dark:scale-0 transition-transform duration-500 rotate-0 dark:-rotate-90" />
      <RiMoonLine className="moon absolute scale-0 dark:scale-100 transition-transform duration-500 rotate-90 dark:rotate-0" />
    </Button>
  )
}
