import React, { useState } from 'react'

const UseStateHook = () => {
    const [stateName, setStateName] = useState('')

  return (
    <div>
        <input type="text" name="" id="" onChange={(event) => setStateName(event.target.value)}/>
        {
            stateName
        }
    </div>
  )
}

export default UseStateHook