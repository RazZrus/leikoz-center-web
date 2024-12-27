import { FC } from "react";
import { Button, ButtonGroup, Heading, List, Section, Wrapper } from "./hero.styles";

export const HeroSection: FC = () => {
    return (
      <Section>
        <Wrapper>
            <Heading>Зарегистрируйся в реестре доноров — стань для кого-то героем!</Heading>
            <div>
                <List>
                <li><a href="#">Костный мозг — что это?</a></li>
                <li><a href="#">Типы трансплантации</a></li>
                <li><a href="#">Кто может стать донором костного мозга?</a></li>
                <li><a href="#">Вопросы и ответы</a></li>
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