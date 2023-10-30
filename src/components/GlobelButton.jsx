import React from 'react'
import './GlobelButton.css'

const GlobelButton = (props) => {
    return (
        <div>
            <button className='btn discover-btn'>{props.value}</button>
        </div>
    )
}

export default GlobelButton