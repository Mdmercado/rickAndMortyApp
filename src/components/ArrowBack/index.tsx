import React from 'react'
import { Link } from 'wouter'
import { FaArrowLeft } from 'react-icons/fa6'
import './arrowback.css'

interface ArrowBackProps {
  to: string
}

const ArrowBack: React.FC<ArrowBackProps> = ({ to }) => {
  return (
    <Link to={to}>
      <button className="arrow-back">
        <FaArrowLeft fontSize={'1.5em'} />
        Volver
      </button>
    </Link>
  )
}

export default ArrowBack
