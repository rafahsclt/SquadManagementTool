import React, { useState, TextareaHTMLAttributes} from 'react'

import { Container } from './styles'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    size: 'big' | 'normal'
}

const Input: React.FC<InputProps> = ({ name, size, ...rest}) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <Container 
            isFocused={isFocused}
            size={size}
        >
            <span>{name}</span>
            <textarea 
                {...rest}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </Container>
    )
}

export default Input