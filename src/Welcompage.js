import React from 'react'

const Welcompage = () => {
  const uname=localStorage.getItem("userName");
const uname2=localStorage.getItem("userName2");
  return (
    <div>
      <h1>Welcome {uname}</h1>
      <h2> Your Password is{uname2}</h2>
    </div>
  )
}

export default Welcompage

  