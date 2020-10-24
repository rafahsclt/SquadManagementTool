import React, { useState, InputHTMLAttributes} from 'react'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
}

const Input: React.FC<InputProps> = ({ name, ...rest}) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <Container 
            isFocused={isFocused}
        >
            <span>{name}</span>
            <input 
                {...rest}
                type="text" 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </Container>
    )
}

export default Input