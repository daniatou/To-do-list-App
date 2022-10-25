import React from 'react'
import {FaSpinner} from 'react-icons/fa'

export default function Fetching() {
  return (
    <div className='fetching'>
        <FaSpinner className='spinner' />
    </div>
  )
}
