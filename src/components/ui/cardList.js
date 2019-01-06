import React from 'react'
import Card from './card'

const CardList = ({ robots }) => (
  <div>
    {robots.map((user, i) => (
      <Card {...user} key={i} />
    ))}
  </div>
)

export default CardList
