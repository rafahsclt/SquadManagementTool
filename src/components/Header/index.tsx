import React from 'react'

import { Container, Logo, User } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <Logo>
                <h2>Squad Management Tool</h2>
            </Logo>
            <User>
                <span>John Doe</span>
                <div>JD</div>
            </User>
        </Container>
    )
}

export default Header