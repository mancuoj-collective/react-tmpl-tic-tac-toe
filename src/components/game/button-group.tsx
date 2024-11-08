import { Button } from '../ui/button'
import { RiRefreshLine, RiHome2Line } from '@remixicon/react'
import { DarkModeToggle } from '../dark-mode-toggle'
import { useGameStore } from '@/store/game-store'

export function ButtonGroup() {
  const { gameStatus, resetGame, returnToMenu } = useGameStore()

  return (
    <div className="flex items-center">
      {gameStatus === 'ended' && (
        <Button variant="ghost" size="icon" onClick={resetGame}>
          <RiRefreshLine />
        </Button>
      )}
      {gameStatus !== 'menu' && (
        <Button variant="ghost" size="icon" onClick={returnToMenu}>
          <RiHome2Line />
        </Button>
      )}
      <DarkModeToggle />
    </div>
  )
}
