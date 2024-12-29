import { FC } from 'react'
import { Container, Link, Wrapper } from './header.styled'
import { useMediaQuery } from '../../assets/use-media-query'

export const Header: FC = () => {
  const isMobile = useMediaQuery('(min-width: 768px)')
  return (
    <Wrapper>
        <Container>
            <a href="https://leikozu.net" className="logoLink">
                <img src="logo.png" alt="" />
            </a>
            {isMobile && 
                <Link href="tel:+79168388134">
                    <img src="/icons/phone.svg" alt="" />
                    +7 (916) 838 81 34
                </Link>
            }
        </Container>
        {isMobile && 
        <Container>
            <Link href='https://www.gosuslugi.ru/606630/1/form'>
                Стать донором
            </Link>
            <Link href='https://leikozu.net/help-fund/'>
                Помочь фонду
            </Link>
        </Container>}
    </Wrapper> 
  )
}