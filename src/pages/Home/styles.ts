import styled from 'styled-components'

export const Content = styled.div`
    padding: 50px 50px 0;
    width: 100vw;
    height: 92vh;
    display: flex;

    justify-content: space-between;
`
export const MyTeams = styled.div`
    width: 47%;
    background-color: #FFF;
    border-radius: 20px;
    padding: 10px 20px;

    header {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;

        border-bottom: 1px solid #E9E3E9;

        h1 {
            color: #644094;
            font-size: 30px;
            font-weight: bold;
        }

        button {
            background: linear-gradient(180deg, #C00E4E 0%, #8A206F 100%);
            border: 0;
            height: 34px;
            width: 34px;
            border-radius: 8px;

            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px 2px rgba(102, 47, 136, 0.4);
        }
    }
`

export const Actions = styled.section`
    margin: 20px 0;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    
    button {
        border: 0;
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;

        :first-child {
            width: 30%;
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid #E9E3E9;
        }

        & + button  {
            width: 70%;
        }
    }
`

export const TeamSection = styled.section`
    margin: 10px 0;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 20px;
    font-weight: 600;

    
    :hover {
        background-color: #F7F3F7;
        color: #9F357F;

        div {
            & + div {
                button {
                    visibility: visible;
                }
            }
        }
    }

    div {
        :first-child {
            width: 30%;
        }

        & + div {
            display: flex;
            width: 70%;
            justify-content: space-between;
            align-items: center;

            button {
                margin-right: 10px;
                border: 0;
                background-color: inherit;
                visibility: hidden;
            }
        }
    }
`

export const Statistics = styled.div`
    width: 47%;
    display: flex;
    flex-direction: column;
`

export const Top5 = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    padding: 10px 40px;
    flex: 1;

    header {
        height: 60px;
        display: flex;
        align-items: center;

        color: #644094;
        font-size: 30px;
        font-weight: bold;

        border-bottom: 1px solid #E9E3E9;
    }
    

    main {
        display: flex;
        justify-content: space-between;

        div {
            width: 47%;

            h3 {
                margin: 10px 0;
            }

            div {
                background-color: #F7F3F7;
                padding: 5px 5px;
                width: 100%;
                border-radius: 10px;

                section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 10px 10px 30px;

                    background-color: #FFF;
                    border-radius: 10px;

                    & + section {
                        margin-top: 5px;
                    }

                    strong {
                        font-weight: 600;
                    }
                }
            }
        }
    }
`

export const PickedPlayer = styled.div`
    position: relative;
    flex: 1;
    margin-top: 30px;
    background: linear-gradient(180deg, #C00E4E 0%, #8A206F 100%);
    border-radius: 20px;
    
    display: flex;

    h1 {
        color: #fff;
        margin-bottom: 20px;
    }

    img {
        height: 200px;
        width: 200px;
        border-radius: 50%;

        :first-child {
            border: 4px dashed #B11357;
        }
    }

    div {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        :first-child {
            border-right: 1px solid #E9E3E9;
        }
    }

    main {
        display: flex;
        align-items: flex-start;

        span {
            color: #fff;
            border-bottom: 2px solid #fff;
            padding-bottom: 10px;
        }
    }

    section {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        display: flex;
        align-items: center;
        justify-content: center;

        background: inherit;
        width: 100px;
        height: 100px;

        border: 1px solid #E9E3E9;
        border-radius: 50%;
        
    }
`