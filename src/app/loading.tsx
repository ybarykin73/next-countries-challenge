import Skeleton from "../components/ui/skeleton/Skeleton"

const Loading = () => {
  return (

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(265px, 1fr))',
        justifyContent: 'space-between',
        gridGap: '40px'
      }}
    >
      {
        new Array(12).fill(null).map((item, index: number) => <Skeleton key={index} />)
      }
    </div>
  )
}

export default Loading
