import React from 'react'

const Title = ({children, addClass}) => {
  return (
    <div className= {`${addClass}  font-medium`}>{children}</div>
  )
}

export default Title;