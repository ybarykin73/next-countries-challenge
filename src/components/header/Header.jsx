import Logo from '../logo/Logo'
import Theme from '../theme/Theme'

import './Header.scss'

const Header = () => {
  
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo />
          <Theme />
        </div>
      </div>
    </header>
  )
}

export default Header