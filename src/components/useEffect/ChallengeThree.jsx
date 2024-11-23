import React, { useEffect, useState } from 'react'

const ChallengeThree = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const postData = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await postData.json()
            setPosts(data)
        }

        fetchData()
    }, [])
  return (
    <div>
        {
            posts.map(p => (
                <ul key = {p.id}>
                    <li>{p.title}</li>
                    <li>{p.body}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default ChallengeThree