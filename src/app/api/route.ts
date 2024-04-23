import { NextResponse } from "next/server"

export  const  GET = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()
  return NextResponse.json(data)
}