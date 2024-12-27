import { FC } from 'react'
import { Container, Link, Wrapper } from './header.styled'

export const Header: FC = () => {
  return (
    <Wrapper>
        <Container>
            <a href="https://leikozu.net" className="logoLink">
                <img src="logo.png" alt="" />
            </a>
            <Link href="">
                <img src="/icons/phone.svg" alt="" />
                +7 (916) 838 81 34
            </Link>
        </Container>
        <Container>
            <Link href='https://www.gosuslugi.ru/606630/1/form'>
                Стать донором
            </Link>
            <Link href='https://leikozu.net/help-fund/'>
                Помочь фонду
            </Link>
        </Container>
    </Wrapper> 
  )
}