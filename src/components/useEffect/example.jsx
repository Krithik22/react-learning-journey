import React, { useEffect, useState } from 'react'

const example = () => {

    const [value, setValue] = useState(0)

    //runs the callback function in useEffect every time the component renders
    useEffect(() => {
        console.log("use Effect")
    })

    //runs the callback function in useEffect only when the component is first rendered
    useEffect(() => {
        console.log("use Effect only in the first render")
    }, [])

    //runs the callback function in useEffect every time the component renders because of the value change specified in the dependency array
    useEffect(() => {
        console.log("use Effect because of dependency array")
    }, [value])

    //should not wrap a hook inside a consitional rendering
    // if(value > 0){
    //     useEffect(() => {
    //         console.log("use Effect because of dependency array")
    //     }, [value])
    // }

    //Instead we can do this
    // useEffect(() => {
    //     if(value > 0){
    //         console.log("use Effect because of dependency array")
    //     }
    // }, [value])

  return (
    <div>
        
    </div>
  )
}

export default example