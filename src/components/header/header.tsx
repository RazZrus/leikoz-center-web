import { FC } from 'react'
import { Container, Link, Wrapper } from './header.styled'

export const Header: FC = () => {
  return (
    <Wrapper>
        <Container>
            <img src="logo.png" alt="" />
            <Link href="">
                <img src="/icons/phone.svg" alt="" />
                +7 (916) 838 81 34
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