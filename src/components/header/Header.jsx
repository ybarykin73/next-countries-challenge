import Logo from '../logo/Logo'
import Theme from '../theme/Theme'

import './Header.scss'

const Header = () => {
  
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Logo />
          <Theme />
        </div>
      </div>
    </div>
  )
}

export default Header