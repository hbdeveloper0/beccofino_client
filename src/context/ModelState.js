import React, { useState } from 'react'
import ModelContext from './ModelContext'

const ModelState = (props) =>{
    const [modelOpen, setModelOpen] = useState(false)
    return(
        <ModelContext.Provider value={{modelOpen, setModelOpen }}>
            {props.children}
        </ModelContext.Provider>
    )
}

export default ModelState