import * as React from 'react'
import { type CharacterProps } from '../../types/character'
import './Character.css'

const Character: React.FC<CharacterProps> = ({
  name,
  status,
  species,
  type,
  gender,
  image,
  origin,
  location,
}) => {
  return (
    <div className="character-card">
      <h1 className={`character-status ${status.toLowerCase()}`}>{name}</h1>
      <img src={image} alt={name} />
      <ul>
        <li>
          <strong>Status:</strong>{' '}
          {status == 'Alive'
            ? `${status} 🧬`
            : status == 'Dead'
            ? `${status} ☠️`
            : `${status} 🤷‍♂️`}
        </li>
        <li>
          <strong>Species:</strong> {species}
        </li>
        <li>
          <strong>Type:</strong> {type || 'Unknown'}
        </li>
        <li>
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Origin:</strong> {origin.name}
        </li>
        <li>
          <strong>Location:</strong> {location.name}
        </li>
      </ul>
    </div>
  )
}

export default Character
