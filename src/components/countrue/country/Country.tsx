import Image from 'next/image'

import './Country.scss'

const Country = (props: any) => {

  const {
    tld,
    name,
    flags,
    region,
    subregion,
    currencies,
    capital,
    population,
    languages
  } = props

  const currencie = Object.values(currencies)

  return (
    <article className="country">
      <div className='country__image'>
        <Image 
          fill
          src={flags.svg}
          alt={flags.alt || name.common }
          className='country__img'
        />
      </div>
      <div className='country__main'>
        <h1 className='country__title'>
          { name.common }
        </h1>
        <div className='country__body'>
          
          <ul className='country__feature'>
            <li className='country__feature-item'>
              <b>Native Name: </b>{ name.official }
            </li>
            <li className='country__feature-item'>
              <b>Porulation: </b>{ population }
            </li>
            <li className='country__feature-item'>
              <b>Region: </b>{ region }
            </li>
            <li className='country__feature-item'>
              <b>Sub Region: </b>{ subregion }
            </li>
            <li className='country__feature-item'>
              <b>Capital: </b>{ capital[0] }
            </li>
          </ul>
          <ul className='country__feature'>
            <li className='country__feature-item'>
              <b>Top Level Domain: </b>
                { 
                  tld.map((item: any) => item)
                }
            </li>
            <li className='country__feature-item'>
              <b>Currencies: </b>{ currencie.map((item: any) => item.name) }
            </li>
            <li className='country__feature-item'>
              <b>Languages: </b>
              {
                Object.values(languages)
              }
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Country