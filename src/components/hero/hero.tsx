import { FC } from "react";
import styled from "styled-components";

export const HeroSection: FC = () => {
    return (
      <Section>
        <Wrapper>
            <Heading>Зарегистрируйся в реестре доноров — стань для кого-то героем!</Heading>
            <div>
                <List>
                <li><a href="#">Костный мозг — что это?</a></li>
                <li><a href="#">Типы трансплантации</a></li>
                <li><a href="#">Кто может стать донором костного мозга?</a></li>
                <li><a href="#">F.A.Q.</a></li>
                </List>
                <ButtonGroup>
                    <Button>Стать донором</Button>
                    <Button>Пожертвовать</Button>
                </ButtonGroup>
            </div>
        </Wrapper>
      </Section>
    );
};

export const Wrapper = styled('div')(() => ({
    maxWidth: '1440px',
    padding: '0 40px',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
}))

export const ButtonGroup = styled('div')(() => ({
    display: 'flex',
    gap: '60px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '25px',
}))

export const Button = styled('button')(() => ({
    padding: '5px 15px',
    backgroundColor: 'white',
    fontSize: '24px',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: '30px',
    borderRadius: '50px',
    border: "none",
    color: '#DA352C',
    transition: 'all 0.125s ease',
    cursor: 'pointer',
    "&:hover": {
        opacity: '0.8',
    }
}))

export const List = styled('ul')(() => ({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    '& li': {
        width: 'fit-content',
        fontSize: '24px',
        lineHeight: '30px',
        '& a': {
            color: 'white',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            textDecoration: 'none',
            '&:before': {
                content: '""',
                background: 'url("/icons/arrow.svg")',
                width: '15px',
                height: '16px',
                display: 'block',
            }
        }
    }
}))

export const Heading = styled('h1')(() => ({
    fontSize: '40px',
    lineHeight: '48px',
    color: 'white',
    maxWidth: '800px',
}))

export const Section = styled('section')(() => ({
    width: '100%',
    height: '535px',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    padding: '24px',
    boxSizing: 'border-box',
    background: 'url("/heroBackground.png")',
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}))