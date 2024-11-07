import { motion } from 'framer-motion'
import { useGameStore } from '@/store/game-store'

export function GameStatus() {
  const { currentPlayer, winner, gameMode } = useGameStore()

  const getStatusText = () => {
    if (winner === 'draw') {
      return "It's a Draw!"
    }

    if (winner) {
      return gameMode === 'single' ? (
        winner === 'O' ? (
          <>
            <span className="text-red-500">AI</span> Win!
          </>
        ) : (
          <>
            <span className="text-blue-500">You</span> Win!
          </>
        )
      ) : (
        <>
          Player <span className={winner === 'X' ? 'text-blue-500' : 'text-red-500'}>{winner}</span> Wins!
        </>
      )
    }

    if (gameMode === 'single') {
      return currentPlayer === 'O' ? (
        <>
          <span className="text-red-500">AI</span>'s Turn
        </>
      ) : (
        <>
          <span className="text-blue-500">Your</span> Turn
        </>
      )
    }

    return (
      <>
        Player <span className={currentPlayer === 'X' ? 'text-blue-500' : 'text-red-500'}>{currentPlayer}</span>'s Turn
      </>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-8">
      <h2 className="text-lg font-semibold">{getStatusText()}</h2>
    </motion.div>
  )
}
