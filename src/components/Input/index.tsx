import React, { useState, useEffect, useRef, InputHTMLAttributes} from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    visibleName: string
}

const Input: React.FC<InputProps> = ({ name, visibleName,...rest}) => {
    const inputRef = useRef(null)
    
    const { fieldName, error, registerField} = useField(name)
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]) 

    return (
        <Container 
            isFocused={isFocused}
            isErrored={!!error}
        >
            <span>{visibleName} {error && ` >> (${error})`}</span>
            <input 
                {...rest}
                ref={inputRef}
                type="text"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </Container>
    )
}

export default Input