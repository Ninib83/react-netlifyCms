import React from 'react'

const Card = ({ id, name, userName, email }) => (
  <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
    <img alt="robo" src={`https://robohash.org/${id}?200x200`} />
    <div>
      <h2>{name}</h2>
      <h4>{userName}</h4>
      <p>{email}</p>
    </div>
  </div>
)

export default Card
