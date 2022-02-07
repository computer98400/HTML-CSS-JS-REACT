import React from 'react';


export default function Teaminput({ name, input }) {
    
    const data = (e) => {
        input(name, e.target.value);
    }

    return (
        <input name={name} onChange={data} />
    )
}