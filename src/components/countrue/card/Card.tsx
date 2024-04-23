import Image from 'next/image'
import Link from 'next/link'
import './Card.scss'

const Card = (props: any) => {
  const {
    name,
    flag,
    region,
    capital,
    population
  } = props

  return (
    <div className="card">
      <div className='card__image'>
        <Image
          fill={true}
          src={flag.svg} 
          alt={flag.alt || name}
          className='card__img'
        />
      </div>
      <div className='card__body'>
        <Link href={`/countrue/${name}`}>
          <h2 className='card__name'>{name}</h2>
        </Link>          
        <ul className='card__feature'>
          <li className='card__feature-item'><b>Population:</b> {population}</li>
          <li className='card__feature-item'><b>Region:</b> {region}</li>
          <li className='card__feature-item'><b>Capital:</b> {capital ? capital[0] : '-'}</li>
        </ul>
      </div>
    </div>
  )
}

export default Card