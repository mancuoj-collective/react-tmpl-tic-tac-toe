import { useGameStore } from '@/lib/store'
import { AnimatePresence, motion } from 'framer-motion'
import { GameBoard, GameMenu, GameStatus, ButtonGroup } from '@/components/game'
import { AppProvider } from './provider'

export function App() {
  const { gameStatus } = useGameStore()

  return (
    <AppProvider>
      <div className="absolute right-2 top-2">
        <ButtonGroup />
      </div>
      <AnimatePresence mode="wait">
        {gameStatus === 'menu' ? (
          <GameMenu />
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
    </AppProvider>
  )
}
