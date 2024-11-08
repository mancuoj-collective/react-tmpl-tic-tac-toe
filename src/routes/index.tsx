import { Layout } from './layout'
import { useGameStore } from '@/store/game-store'
import { AnimatePresence, motion } from 'framer-motion'
import { GameBoard, GameMenu, GameStatus, ButtonGroup } from '@/components/game'

export function App() {
  const { gameStatus } = useGameStore()

  return (
    <Layout>
      <div className="absolute top-2 right-2">
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
    </Layout>
  )
}
