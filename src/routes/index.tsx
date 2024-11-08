import { Layout } from './layout'
import { useGameStore } from '@/store/game-store'
import { AnimatePresence, motion } from 'framer-motion'
import { GameBoard, GameMenu, GameStatus } from '@/components/game'
import { ButtonGroup } from '@/components/game/button-group'

export function App() {
  const { gameStatus } = useGameStore()

  return (
    <Layout>
      <div className="w-full h-[28rem] border rounded-lg relative shadow z-10">
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
      </div>
    </Layout>
  )
}
