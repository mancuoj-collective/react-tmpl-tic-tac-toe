import { create } from 'zustand'

type GameMode = 'single' | 'multi'
type GameStatus = 'menu' | 'playing' | 'ended'
type Player = 'X' | 'O'
type Cell = Player | null

interface GameStore {
  gameMode: GameMode
  gameStatus: GameStatus
  board: Cell[]
  currentPlayer: Player
  winner: Player | null | 'draw'
  winningLine: number[] | null

  initGame: (mode: GameMode) => void
  resetGame: () => void
  returnToMenu: () => void
  makeMove: (index: number) => void
}

const ALL_WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function calculateWinner(squares: Cell[]): { winner: Player | null; winningLine: number[] | null } {
  for (const [a, b, c] of ALL_WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winningLine: [a, b, c] }
    }
  }
  return { winner: null, winningLine: null }
}

function getAIMove(board: Cell[]): number {
  for (const [a, b, c] of ALL_WINNING_LINES) {
    if (board[a] === 'O' && board[b] === 'O' && !board[c]) return c
    if (board[a] === 'O' && board[c] === 'O' && !board[b]) return b
    if (board[b] === 'O' && board[c] === 'O' && !board[a]) return a
  }

  for (const [a, b, c] of ALL_WINNING_LINES) {
    if (board[a] === 'X' && board[b] === 'X' && !board[c]) return c
    if (board[a] === 'X' && board[c] === 'X' && !board[b]) return b
    if (board[b] === 'X' && board[c] === 'X' && !board[a]) return a
  }

  if (!board[4]) return 4

  const availableCells = board.reduce((acc, cell, index) => (cell === null ? [...acc, index] : acc), [] as number[])
  return availableCells[Math.floor(Math.random() * availableCells.length)]
}

export const useGameStore = create<GameStore>((set, get) => ({
  gameMode: 'single',
  gameStatus: 'menu',
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  winningLine: null,

  initGame: (mode: GameMode) => {
    set({
      gameMode: mode,
      gameStatus: 'playing',
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      winningLine: null,
    })
  },

  resetGame: () => {
    const { gameMode } = get()
    get().initGame(gameMode)
  },

  returnToMenu: () => {
    set({
      gameStatus: 'menu',
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      winningLine: null,
    })
  },

  makeMove: (index: number) => {
    const { gameStatus, gameMode, board, currentPlayer } = get()

    if (gameStatus !== 'playing' || board[index]) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer

    const { winner, winningLine } = calculateWinner(newBoard)
    const isDraw = !winner && newBoard.every((cell) => cell !== null)

    set({
      gameStatus: winner || isDraw ? 'ended' : 'playing',
      board: newBoard,
      currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
      winner: isDraw ? 'draw' : winner,
      winningLine,
    })

    if (gameMode === 'single' && !winner && !isDraw && currentPlayer === 'O') {
      setTimeout(() => {
        const move = getAIMove(newBoard)
        get().makeMove(move)
      }, 800)
    }
  },
}))
