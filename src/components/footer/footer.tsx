import { FC } from 'react'
import { GlobalContainer } from '../global-container/global-container'
import { Contacts, Container, LeftBlock, LogoMail, LogoText, LogoWrapper, RightBlock, Wrapper } from './footer.styles'

export const Footer: FC = () => {
  return (
    <Wrapper>
        <GlobalContainer containerStyles={{ maxWidth: '800px' }}>
            <Container>
                <LeftBlock>
                    <LogoWrapper>
                        <img src="/icons/logo_without_text.svg" alt="" style={{ gridArea: 'logo' }}/>
                        <LogoText>ФОНД БОРЬБЫ С ЛЕЙКЕМИЕЙ</LogoText>
                        <LogoMail href="mailto:info@leikozu.net">info@leikozu.net</LogoMail>
                    </LogoWrapper>
                    <Contacts>
                        <img src="/icons/white_phone.svg" alt="" />
                        <a href="tel:79168388134">Контактные данные: +7 (916) 838 81 34</a>
                    </Contacts>
                </LeftBlock>
                <RightBlock>
                    <img src="/icons/president_fund.png" alt="" />
                    <p>DonorSearch © 2010-2022</p>
                </RightBlock>
            </Container>
        </GlobalContainer>
    </Wrapper>
  )
}