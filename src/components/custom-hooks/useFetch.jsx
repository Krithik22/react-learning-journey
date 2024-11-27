import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data1 => setData(data1))
    }, [])

    return [data]
}

export default useFetch