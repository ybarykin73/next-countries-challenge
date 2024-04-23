type Params = {
  slug: string
}

const Page = ({params}: { params: Params}) => {
  return (
    <div> countru { params.slug }</div>
  )
}

export default Page