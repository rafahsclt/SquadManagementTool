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
`

export const TagDiv = styled.main`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 140px;
    width: 100%;
    padding: 0 8px;
    border: 1px solid lightgrey;
    border-radius: 6px;
    
    &:focus-within {
        border-color: #B41356;
    }
    input {
        flex: 1;
        border: none;
        height: 60px;
        font-size: 14px;
        &:focus {
            outline: transparent;
        }
    }


    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 8px 0 0 0;
    }

    li {
        width: auto;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 0 8px;
        font-size: 14px;
        list-style: none;
        border-radius: 10px;
        margin: 0 8px 8px 0;
        background: #C50341;

        i {
            display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 14px;
            margin-left: 8px;
            color: #fff;
            background: inherit;
            cursor: pointer;
    }
}
`