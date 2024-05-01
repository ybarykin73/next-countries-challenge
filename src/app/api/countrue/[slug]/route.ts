import { NextResponse } from "next/server"

import TParams from "@/src/types/TParams"

export  const  GET = async (request: Request, { params }: {params: TParams}) => {
  
  const slug = params.slug
  const res = await fetch(`https://restcountries.com/v3.1/name/${slug}`)
  const data = await res.json()

  return NextResponse.json(data)
}