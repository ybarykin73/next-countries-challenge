import Image from 'next/image'

import { ICountry } from '@/src/types/ICountry'
import './Country.scss'

const Country:React.FC<ICountry> = (props) => {

  const {
    tld,
    name,
    region,
    capital,
    languages,
    subregion,
    flagImage,
    population,
    currencies,
    flagImageAlt,
    officialName,
  } = props

  return (
    <article className="country">
      <div className='country__image'>
        <Image 
          fill
          src={flagImage}
          alt={flagImageAlt || name }
          className='country__img'
        />
      </div>
      <div className='country__main'>
        <h1 className='country__title'>
          { name }
        </h1>
        <div className='country__body'>
          <ul className='country__feature'>
            <li className='country__feature-item'>
              <b>Native Name: </b>{ officialName }
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
              <b>Capital: </b>{ capital }
            </li>
          </ul>
          <ul className='country__feature'>
            <li className='country__feature-item'>
              <b>Top Level Domain: </b>
                { 
                  tld
                }
            </li>
            <li className='country__feature-item'>
              <b>Currencies: </b> {
                !currencies.length 
                  ?
                   '-'
                  :  
                   currencies.map((item: any) => item.name) 
              }
            </li>
            <li className='country__feature-item'>
              <b>Languages: </b> { languages }
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Country