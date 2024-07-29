import React from 'react'

export default function Input({name,className,value,onChange, id, pattern ,placeholder, type}) {
  return (
    <div className={className}>
        <input 
            type={type}
            name={name} 
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            pattern={pattern}
            required 
        />
    </div>
  )
}
