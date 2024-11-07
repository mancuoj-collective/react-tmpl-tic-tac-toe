import { Layout } from './layout'
import { useGameStore } from '@/store/game-store'
import { AnimatePresence, motion } from 'framer-motion'
import { GameBoard, GameMenu, GameStatus } from '@/components/game'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Button } from '@/components/ui/button'
import { RiHome2Line, RiRefreshLine } from '@remixicon/react'

export function App() {
  const { gameStatus, returnToMenu, resetGame } = useGameStore()

  return (
    <Layout>
      <div className="w-full h-[28rem] border rounded-lg relative shadow">
        <div className="absolute top-2 right-2">
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
        </div>
        <AnimatePresence mode="wait">
          {gameStatus === 'menu' ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GameMenu />
            </motion.div>
          ) : (
            <motion.div
              key="board"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <GameBoard />
              <GameStatus />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  )
}
