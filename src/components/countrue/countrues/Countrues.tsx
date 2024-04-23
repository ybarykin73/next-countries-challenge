'use client'

import Card from "../card/Card"

import './Countrues.scss'

const Countrues  = (props: any) => {

  const {
    countrues
  } = props

  return (
    <ul className="countrues">
      {
        countrues.map((item: any) => (
          <Card 
            key={item.name.common}
            name={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
            flag={item.flags}
          />
        ))
      }
    </ul>
  )
}

export default Countrues