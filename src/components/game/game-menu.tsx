import { motion } from 'framer-motion'
import { useGameStore } from '@/lib/store'
import { Button } from '../ui/button'

export function GameMenu() {
  const { initGame } = useGameStore()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center justify-center gap-10 pt-36"
    >
      <h1 className="font-serif text-4xl font-semibold">Tic Tac Toe</h1>
      <div className="flex flex-col gap-2.5">
        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 px-6"
          onClick={() => initGame('single')}
        >
          <span className="i-carbon-bot" />1 Player
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-start gap-2 px-6"
          onClick={() => initGame('multi')}
        >
          <span className="i-carbon-group" />2 Players
        </Button>
      </div>
    </motion.div>
  )
}
