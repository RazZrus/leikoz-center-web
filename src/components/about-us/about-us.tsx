import { FC } from "react"
import styled from "styled-components"

export const AboutUs: FC = () => {
  return (
    <Wrapper>
        <Heading>О нас</Heading>
        <CardGroup>
            <Card>Мы поддерживаем пациентов на всех этапах борьбы с заболеванием.</Card>
            <Card>С 2014 года помогаем взрослым с онкологическими заболеваниями крови по всей России.</Card>
        </CardGroup>
        <FactGroup>
            <Fact>
                <FactTitle>Костный мозг — что это?</FactTitle>
                <FactSummary>Костный мозг — это важнейший орган системы кроветворения. Он находится в губчатом веществе костей и не имеет формы. Именно в нем «живут» гемопоэтические стволовые клетки, которые затем трансформируются в эритроциты, тромбоциты и лейкоциты. 
    При острых лейкозах и других заболеваниях системы крови нарушается работа костного мозга. Врачи проводят его исследование, и при наличии показаний планируют проведение трансплантации костного мозга. 
                </FactSummary>
            </Fact>
            <Fact>
                <FactTitle>Различают два типа трансплантации:</FactTitle>
                <FactSummary>
                    Aутологичная и Aллогенная. Аутологичная трансплантация — это метод лечения, при котором для пересадки используются собственные стволовые клетки пациента.
                    <SubFactSummary>
                    Аллогенная трансплантация необходима в случаях, когда костный мозг пациента поврежден и не может нормально функционировать и производить новые здоровые клетки крови. В этом случае пациенту нужен донор. 
    Аутологичная трансплантация — это комплексный метод лечения, включающий в себя переливание донорских гемопоэтических стволовых клеток пациенту.
                    </SubFactSummary>
                </FactSummary>
            </Fact>
            <Fact>
                <FactTitle>Как проходит аллогенная трансплантация?</FactTitle>
                <FactSummary>
                Сначала пациент получает лечение: химиотерапию, таргетные препараты или лучевую терапию — для уменьшения опухолевой массы. Затем, когда врачи удостоверятся, что пациент вышел в ремиссию, терапия интенсифицируется, чтобы уничтожить пораженные клетки костного мозга.
Параллельно идет процесс активации и обследования донора. На этапе интенсификации терапии пациента донор проходит процедуру донации — сбора стволовых клеток.
                </FactSummary>
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
Донация — это ответственный шаг! Прежде чем регистрироваться, нужно понять, готовы ли Вы на это. Отказаться от процедуры донации можно практически на любом этапе, но желательно не позднее, чем за 10 дней до намеченной даты трансплантации.
Если человек, вступивший в регистр, не готов стать донором, лучше как можно раньше сообщить об этом в регистр. Или отказаться от процедуры сразу после информирования о том, что он подошел в качестве донора другому человеку.
                    </SubFactSummary>
                    <ButtonGroup>
                    <Button>Стать донором</Button>
                    Если Вы не готовы или не можете стать донором, но хотите принять участие в судьбе других людей, — вы можете помочь Фонду борьбы с лейкемией. 
                    <Button>Помочь фонду</Button>
                    </ButtonGroup>
                </FactSummary>
            </Fact>
        </FactGroup>
    </Wrapper>
  )
}

export const ButtonGroup = styled('div')(() => ({
    margin: '50px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
}))

export const Button = styled('button')(() => ({
    padding: '10px 20px',
    color: 'white',
    fontSize: '36px',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: '40px',
    borderRadius: '20px',
    border: "none",
    backgroundColor: '#DA352C',
    transition: 'all 0.125s ease',
    cursor: 'pointer',
    "&:hover": {
        opacity: '0.8',
    }
}))

export const FactGroup = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
}))

export const Fact = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    gap: '150px',
}))

export const FactTitle = styled('div')(() => ({
    fontSize: '26px',
    lineHeight: '32px',
    color: '#DA352C',
}))

export const FactSummary = styled('div')(() => ({
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 400,
    width: '100%',
    maxWidth: '800px',
}))

export const SubFactSummary = styled(FactSummary)(() => ({
    paddingLeft: '26px',
    borderLeft: '3px solid #DA352C',
    marginTop: '25px',
}))

export const CardGroup = styled('div')(() => ({
    display: 'flex',
    gap: '200px',
}))

export const Card = styled('div')(() => ({
    width: '100%',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '30px',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '40px',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)'
}))

export const Wrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    justifyContent: 'center',
    alignItems: 'flex-start',
}))

export const Heading = styled('h2')(() => ({
    fontSize: '40px',
    marginTop: '50px',
    lineHeight: '48px',
    color: '#DA352C',
}))