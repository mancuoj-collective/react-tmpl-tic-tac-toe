import { RiGroup3Line, RiRobot2Line } from '@remixicon/react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { useGameStore } from '@/store/game-store'

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
      <h1 className="text-4xl font-semibold font-serif">Tic Tac Toe</h1>
      <div className="flex flex-col gap-2.5">
        <Button
          variant="outline"
          className="flex justify-start items-center gap-2 px-6"
          onClick={() => initGame('single')}
        >
          <RiRobot2Line className="size-4" />1 Player
        </Button>
        <Button
          variant="outline"
          className="flex justify-start items-center gap-2 px-6"
          onClick={() => initGame('multi')}
        >
          <RiGroup3Line className="size-4" />2 Players
        </Button>
      </div>
    </motion.div>
  )
}
