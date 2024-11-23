import React from 'react'

function ProfileCard() {
    const styles= {
        color: "black",
        backgroundColor: "lightgray",
        padding: "15px",
        borderRadius: "8px"
    }
  return (
    <div style={styles}>
        <h1>Profile Card styling</h1>
        <p>This is styled with separate styled object</p>
    </div>
  )
}

export default ProfileCard