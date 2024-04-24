import Country from "@/src/components/countrue/country/Country"

import { getCountry } from "@/src/server/api/countries/getCountry"

import TParams from "@/src/types/TParams"

const Page = async ({params}: { params: TParams}) => {

  const country = await getCountry(params.slug)

  return (
    <div> countru { params.slug }
        <Country country={country} />
    </div>
  )
}

export default Page