import { memo } from "react"

const Small = memo(({value}) => {
  console.log('Small')

  return (
    <small>{value}</small>
  )
})

export default Small