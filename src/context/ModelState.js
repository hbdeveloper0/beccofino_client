import React, { useState } from 'react'
import ModelContext from './ModelContext'

const ModelState = (props) =>{
    const [modelOpen, setModelOpen] = useState(false)
    const [currentdate, setcurrentdate] = useState(null);
    const [clickedButton, setClickedButton] = useState(null);
    return(
        <ModelContext.Provider value={{modelOpen, setModelOpen, currentdate, setcurrentdate, clickedButton, setClickedButton}}>
            {props.children}
        </ModelContext.Provider>
    )
}

export default ModelState