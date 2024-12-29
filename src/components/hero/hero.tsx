import { FC } from "react";
import { Button, ButtonGroup, Heading, List, Section, Wrapper } from "./hero.styles";

export const HeroSection: FC = () => {
    return (
      <Section>
        <Wrapper>
            <Heading>Зарегистрируйся в реестре доноров — стань для кого-то героем!</Heading>
            <div>
                <List>
                <li><a href="#bone-marrow">Костный мозг — что это?</a></li>
                <li><a href="#types-of-transplantation">Типы трансплантации</a></li>
                <li><a href="#who-can-be-donor">Кто может стать донором костного мозга?</a></li>
                <li><a href="#qa">Вопросы и ответы</a></li>
                </List>
                <ButtonGroup>
                    <Button href="https://www.gosuslugi.ru/606630/1/form">Стать донором</Button>
                    <Button href="https://leikozu.net/help-fund/">Пожертвовать</Button>
                </ButtonGroup>
            </div>
        </Wrapper>
      </Section>
    );
};