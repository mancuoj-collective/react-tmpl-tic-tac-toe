import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/game-store'
import { motion } from 'framer-motion'

export function GameBoard() {
  const { board, makeMove, winningLine } = useGameStore()

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-3 pt-20">
        {board.map((cell, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => makeMove(index)}
            className={cn(
              'flex items-center justify-center size-20 bg-foreground/10',
              'hover:bg-foreground/20 rounded-lg text-3xl font-bold',
              'transition-colors duration-200',
              'focus:outline-none',
              winningLine?.includes(index) && 'bg-foreground/30 hover:bg-foreground/40',
            )}
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: cell ? 1 : 0 }}
              className={cn(cell === 'X' ? 'text-blue-500' : 'text-red-500')}
            >
              {cell}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
