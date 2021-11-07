import React, { useEffect } from 'react'
import { RootState } from '../../store/store'
import Grid from '../layout/Grid'
import Card from '../cards/Card'
import { useSelector } from 'react-redux'

const COL_COUNT = 6
const Game: React.FC = () => {
  const cards = useSelector((state: RootState) => state.game.cards)
  const flipped = useSelector((state: RootState) => state.game.flipped)

  useEffect(() => {
    const checkWin = () => {
      return cards.every((card) => card.removed)
    }

    if (flipped[0] < 0 || flipped[1] < 0) {
      return
    }
    if (checkWin()) {
      console.log('win')
    }
  }, [cards, flipped])

  return (
    <div>
      <Grid colCount={COL_COUNT}>
        {cards.map((item, i) => (
          <Card
            key={i}
            index={i}
            flipped={i === flipped[0] || i == flipped[1]}
            {...item}
          />
        ))}
      </Grid>
    </div>
  )
}

export default Game
