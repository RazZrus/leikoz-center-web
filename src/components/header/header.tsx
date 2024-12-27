import React, { FC } from 'react'
import { Container, Link, Wrapper } from './header.styled'

export const Header: FC = () => {
  return (
    <Wrapper>
        <Container>
            <img src="logo.png" alt="" />
            <Link>
                <img src="" alt="" />
                <p>Контактные данные: +7 (916) 838 81 34</p>
            </Link>
        </Container>
        <Container>
            <Link>
                <p>Стать донором</p>
            </Link>
            <Link>
                <p>Помочь фонду</p>
            </Link>
        </Container>
    </Wrapper>
  )
}