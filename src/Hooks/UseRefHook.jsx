import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const ExpRef = useRef(null)

    const [stateName, setStateName] = useState('')

    const buttonHandle = () => {

        setStateName(ExpRef.current.value)

    }

    useEffect(() => {
        ExpRef.current.focus();

    },[])



  return (
    <div>
        <input type="text" name="" id=""  ref={ExpRef}/>
        <button onClick={buttonHandle}>Click</button>
        <div>
            {
                stateName
            }
        </div>
    </div>
  )
}

export default UseRefHook