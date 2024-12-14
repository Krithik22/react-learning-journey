import React from 'react'

function StyledCard() {
  return (
    <div style={{
        backgroundColor: "lightblue",
        color:"darkblue",
        padding: "20px",
        borderRadius: "10px"
    }}>
        <h1>Inline Styling</h1>
        <p>This is inline styling</p>
    </div>
  )
}

export default StyledCard