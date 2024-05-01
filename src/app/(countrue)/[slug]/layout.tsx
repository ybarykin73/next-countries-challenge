import BreadCrumbs from "@/src/components/breadcrumbs/BreadCrumbs"

const CountrueLayout = (props: { children:  React.ReactNode }) => {
  const {
    children
  } = props

  return (
    <>
      <BreadCrumbs />
      {children}
    </>
  )
}

export default CountrueLayout