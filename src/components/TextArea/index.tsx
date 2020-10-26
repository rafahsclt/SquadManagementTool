import React, { useState, useRef, useEffect, TextareaHTMLAttributes} from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    visibleName: string
}

const TextArea: React.FC<TextAreaProps> = ({ name, visibleName,...rest}) => {
    const [isFocused, setIsFocused] = useState(false)

    const textAreaRef = useRef(null)
    const { fieldName, registerField} = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textAreaRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]) 

    return (
        <Container 
            isFocused={isFocused}
        >
            <span>{visibleName}</span>
            <textarea 
                {...rest}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                ref={textAreaRef}
            />
        </Container>
    )
}

export default TextArea