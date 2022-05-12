import React from 'react'

function Props() {
  return (
    <div>
      <Name name ="Kevin"/>
    </div>
  )
}

function Name(props){
    return(
        <div>
            <h1>Hi, <p className='kevin' style={{color:'gray'}}>{props.name}</p> Special offers for you only!!!!</h1>
        </div>
    )
}

export default Props
