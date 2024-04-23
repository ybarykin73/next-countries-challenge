import Countrues from '../components/countrue/countrues/Countrues';
import { getAllCountrues } from '../server/api/countries/getAllCountries'

export default async function Home() {

  const countrues = await getAllCountrues()

  return (
    <Countrues countrues={countrues} />
  );
}
