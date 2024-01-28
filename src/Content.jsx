import React from 'react'
import Part from './Part'
 const Content = (props) => {
     const part1 = 'Fundamentals of React'
    const exercises1 = 10
  return (<>
    <Part part = {props.parts.name} exercise = {props.parts.exercises} />
     
  </>
    
  )
}
export default Content