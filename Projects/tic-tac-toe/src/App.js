import Square from './components/Square'
import styles from './App.css'

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>

      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
    </>
  )
}


