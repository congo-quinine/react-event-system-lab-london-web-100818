import React from 'react'

class Keypad extends React.Component {


  render () {
    return (
      <div>
      <input onKeyUp={ () => console.log(`Entering password...`)} type='password'></input>
      </div>
    )
  }
  
}

export default Keypad
