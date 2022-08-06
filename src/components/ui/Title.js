import React from 'react'

export default function Title({ title, className }) {
    console.log(className);
    return (
        < h3 className={`font-semibold text-base py-4 ` + className} >
            {title}
        </ h3>
    )
}
