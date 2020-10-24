import styled from 'styled-components'

interface InputProps {
    isFocused: boolean
}

export const Container = styled.div<InputProps>`
    width: 100% !important;

    span {
        margin: 20px 0 10px 0;
        font-weight: 600;
        color: ${props => props.isFocused && '#B41356'}
    }

    input {
        height: 30px;
        border-radius: 4px;
        border: 1px solid lightgrey;
        border-color: ${props => props.isFocused && '#B41356'};
        padding-left: 10px;

        ::placeholder {
            color: lightgrey;
        }
    }
`