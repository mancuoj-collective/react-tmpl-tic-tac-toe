import { Button } from '../ui/button'
import { RiRefreshLine, RiHome2Line, RiGithubLine } from '@remixicon/react'
import { DarkModeToggle } from '../dark-mode-toggle'
import { useGameStore } from '@/store/game-store'

export function ButtonGroup() {
  const { gameStatus, resetGame, returnToMenu } = useGameStore()

  return (
    <>
      {gameStatus === 'ended' && (
        <Button variant="ghost" size="icon" onClick={resetGame}>
          <RiRefreshLine />
        </Button>
      )}
      {gameStatus === 'menu' ? (
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/mancuoj-collective/react-tmpl-tic-tac-toe" target="_blank" rel="noreferrer">
            <RiGithubLine />
          </a>
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={returnToMenu}>
          <RiHome2Line />
        </Button>
      )}
      <DarkModeToggle />
    </>
  )
}
