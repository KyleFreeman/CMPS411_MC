import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button type="submit">{props.type}</button>
        </div>
    )
}

export default Button