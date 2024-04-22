'use client'

import Image from "next/image"

import './Theme.scss'

const Theme = () => {
  return (
    <div className="theme">
      <Image 
        src={'/moon.svg'} 
        width={35}
        height={35}
        alt="theme"
        className="theme__icon"
      />
      <span className="theme__text">Dark Mode</span>
    </div>
  )
}

export default Theme