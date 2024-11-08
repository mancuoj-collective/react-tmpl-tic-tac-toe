import { cn } from '@/lib/utils'
import { useGameStore } from '@/store/game-store'
import { motion } from 'framer-motion'

export function GameBoard() {
  const { board, makeMove, winningLine, winner } = useGameStore()

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-3.5 pt-20">
        {board.map((cell, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8 }}
            animate={{
              scale: 1,
              rotate: winningLine?.includes(index) ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 0.3,
              rotate: {
                duration: 0.5,
                repeat: winningLine?.includes(index) ? 3 : 0,
              },
            }}
            onClick={() => makeMove(index)}
            className={cn(
              'flex items-center justify-center size-20 bg-foreground/10',
              'hover:bg-foreground/20 rounded-lg text-3xl font-bold',
              'transition-colors duration-200',
              'focus:outline-none',
              winningLine?.includes(index) && [
                'ring',
                winner === 'X' && 'ring-blue-500 bg-blue-500/20 hover:bg-blue-500/30',
                winner === 'O' && 'ring-red-500 bg-red-500/20 hover:bg-red-500/30',
              ],
            )}
          >
            <motion.span
              initial={{ scale: 0.3 }}
              animate={{ scale: cell ? 1 : 0.3 }}
              transition={{ duration: 0.2 }}
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
