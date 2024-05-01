'use client'

import Image from "next/image"
import Button from "../ui/button/Button"

import { useRouter } from "next/navigation"

import './BackButton.scss'
const BackButton = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <Button 
      onClick={goBack}
      ariaLabel="Go Back"
      className='back-button'
    >
      <div className="back-button__image">
        <Image
          fill
          src={'/arrow_back.svg'}
          alt="Go back"
        />
      </div>
      Back
    </Button>
  )
}

export default BackButton