import { useGameStore } from '@/lib/store'
import { DarkModeToggle } from '../dark-mode-toggle'
import { Button } from '../ui/button'

export function ButtonGroup() {
  const { gameStatus, resetGame, returnToMenu } = useGameStore()

  return (
    <>
      {gameStatus === 'ended' && (
        <Button variant="ghost" size="icon" onClick={resetGame}>
          <span className="i-carbon-restart" />
        </Button>
      )}
      {gameStatus === 'menu' ? (
        <Button variant="ghost" size="icon" asChild>
          <a
            href="https://github.com/mancuoj-collective/react-tmpl-tic-tac-toe"
            target="_blank"
            rel="noreferrer"
          >
            <span className="i-carbon-logo-github" />
          </a>
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={returnToMenu}>
          <span className="i-carbon-home" />
        </Button>
      )}
      <DarkModeToggle />
    </>
  )
}
