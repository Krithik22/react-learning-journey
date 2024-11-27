import useFetch from "./useFetch";

import React from 'react'

const CustomHookExample = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <div>
        {data && data.map(item => {
            return <li key={item.id}>{item.title}</li>
        })}
    </div>
  )
}

export default CustomHookExample