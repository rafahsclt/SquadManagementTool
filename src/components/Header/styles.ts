import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    background: linear-gradient(90deg, #C00E4E 0%, #8A206F 100%);

    color: #fff;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px;
`

export const Logo = styled.div`
    display: flex;

    h2 {
        font-size: 20px;
    }
`

export const User = styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 16px;
        margin-right: 10px;
    }

    > div {
        height: 36px;
        width: 36px;
        background-color: #F3F5F7;
        border-radius: 18px;

        color: #000;
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`