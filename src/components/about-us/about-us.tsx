import { FC } from "react"
import { Button, ButtonGroup, Card, CardGroup, Fact, FactGroup, FactSummary, FactTitle, Heading, SubFactSummary, Wrapper } from "./about-us.styles"

export const AboutUs: FC = () => {
  return (
    <Wrapper>
        <Heading>О нас</Heading>
        <CardGroup>
            <Card>Мы поддерживаем пациентов на всех этапах борьбы с заболеванием.</Card>
            <Card>С 2014 года помогаем взрослым с онкологическими заболеваниями крови по всей России.</Card>
        </CardGroup>
        <FactGroup>
            <Fact>
                <FactTitle>Костный мозг — что это?</FactTitle>
                <FactSummary>Костный мозг — это важнейший орган системы кроветворения. Он находится в губчатом веществе костей и не имеет формы. Именно в нем «живут» гемопоэтические стволовые клетки, которые затем трансформируются в эритроциты, тромбоциты и лейкоциты. При острых лейкозах и других заболеваниях системы крови нарушается работа костного мозга. Врачи проводят его исследование, и при наличии показаний планируют проведение трансплантации костного мозга.</FactSummary>
            </Fact>
            <Fact>
                <FactTitle>Различают два типа трансплантации:</FactTitle>
                <FactSummary>
                    Aутологичная и Aллогенная.
                    <p>Аутологичная трансплантация — это метод лечения, при котором для пересадки используются собственные стволовые клетки пациента.</p>
                    <SubFactSummary>
                        <p>Аллогенная трансплантация необходима в случаях, когда костный мозг пациента поврежден и не может нормально функционировать и производить новые здоровые клетки крови. В этом случае пациенту нужен донор.</p>
                        <p>Аутологичная трансплантация — это комплексный метод лечения, включающий в себя переливание донорских гемопоэтических стволовых клеток пациенту.</p>
                    </SubFactSummary>
                </FactSummary>
            </Fact>
            <Fact>
                <FactTitle>Как проходит аллогенная трансплантация?</FactTitle>
                <FactSummary>Сначала пациент получает лечение: химиотерапию, таргетные препараты или лучевую терапию — для уменьшения опухолевой массы. Затем, когда врачи удостоверятся, что пациент вышел в ремиссию, терапия интенсифицируется, чтобы уничтожить пораженные клетки костного мозга. Параллельно идет процесс активации и обследования донора. На этапе интенсификации терапии пациента донор проходит процедуру донации — сбора стволовых клеток.</FactSummary>
            </Fact>
            <Fact>
                <FactTitle>Кто может стать донором костного мозга?</FactTitle>
                <FactSummary>
                    <ul style={{ paddingLeft: '40px'}}>
                        <li>Гражданин РФ или иностранный гражданин, проживающий на территории РФ более 1 года (имеющий разрешение на временное проживание или имеющий вид на жительство)</li>
                        <li>От 18 до 45 лет</li>
                        <li>Вес более 50 кг</li>
                        <li>Без серьезных заболеваний</li>
                    </ul>
                    <SubFactSummary>
                        <p style={{ color: '#DA352C', fontWeight: '700'}}>Вероятность стать донором 1 на 10 000</p>
                        <p>Донация — это ответственный шаг! Прежде чем регистрироваться, нужно понять, готовы ли Вы на это. Отказаться от процедуры донации можно практически на любом этапе, но желательно не позднее, чем за 10 дней до намеченной даты трансплантации.</p>
                        <p>Если человек, вступивший в регистр, не готов стать донором, лучше как можно раньше сообщить об этом в регистр. Или отказаться от процедуры сразу после информирования о том, что он подошел в качестве донора другому человеку.</p>
                    </SubFactSummary>
                    <ButtonGroup>
                    <Button href="https://www.gosuslugi.ru/606630/1/form">Стать донором</Button>
                    Если Вы не готовы или не можете стать донором, но хотите принять участие в судьбе других людей, — вы можете помочь Фонду борьбы с лейкемией. 
                    <Button href="https://leikozu.net/help-fund/">Помочь фонду</Button>
                    </ButtonGroup>
                </FactSummary>
            </Fact>
        </FactGroup>
    </Wrapper>
  )
}