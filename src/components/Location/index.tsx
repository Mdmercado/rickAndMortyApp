import React from 'react'
import { LocationProps } from '../../types/locations'
import './location.css'

const Location: React.FC<LocationProps> = ({ name, type, dimension, url }) => {
  return (
    <div className="location">
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Type:</strong> {type}
      </div>
      <div className="additional-info">
        <div>
          <strong>Dimension:</strong> {dimension}
        </div>
        <div>
          <strong>URL:</strong> <a href={url}>{url}</a>
        </div>
      </div>
    </div>
  )
}

export default Location
