import Link from "next/link"

import './Logo.scss'

const Logo = () => {
  return (
    <Link 
      href={'/'}
      className="logo"
    >
      <h2 className="logo__text">Where in the world?</h2>
    </Link>
  )
}

export default Logo