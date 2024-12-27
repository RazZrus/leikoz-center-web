import styled from "styled-components"

export const ButtonGroup = styled('div')(() => ({
    margin: '50px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
}))

export const Button = styled('a')(() => ({
    padding: '10px 20px',
    color: 'white',
    fontSize: '36px',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: '40px',
    width: 'fit-content',
    borderRadius: '20px',
    border: "none",
    textDecoration: 'none',
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