import styled from "styled-components"

export const ButtonGroup = styled('div')(() => ({
    margin: '15px 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',

    ['@media (min-width: 768px)']: {
        gap: '50px',
        alignItems: 'unset',
        margin: '50px 0 0',
    }
}))

export const Button = styled('a')(() => ({
    padding: '10px 20px',
    color: 'white',
    fontSize: '12px',
    lineHeight: '14px',
    fontFamily: 'Inter',
    fontWeight: '700',
    width: 'fit-content',
    borderRadius: '20px',
    border: "none",
    textDecoration: 'none',
    backgroundColor: '#DA352C',
    transition: 'all 0.125s ease',
    cursor: 'pointer',
    "&:hover": {
        opacity: '0.8',
    },

    ['@media (min-width: 768px)']: {
        fontSize: '36px',
        lineHeight: '40px',
    }
}))

export const FactGroup = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    width: '100%',
}))

export const Fact = styled('div')(() => ({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    gap: '10px',

    ['@media (min-width: 768px)']: {
        gap: '50px',
        flexDirection: 'row',
    },
    ['@media (min-width: 1200px)']: {
        gap: '150px'
    }
}))

export const FactTitle = styled('div')(() => ({
    fontSize: '16px',
    lineHeight: '20px',
    color: '#DA352C',

    ['@media (min-width: 768px)']: {
        fontSize: '26px',
        lineHeight: '32px',
    }
}))

export const FactSummary = styled('div')(() => ({
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 400,
    width: '100%',
    flexShrink: 0,

    ['@media (min-width: 768px)']: {
        maxWidth: '400px',
        fontSize: '16px',
        lineHeight: '20px',
    },
    ['@media (min-width: 1200px)']: {
        maxWidth: '800px',
    }
}))

export const SubFactSummary = styled(FactSummary)(() => ({
    paddingLeft: '26px',
    borderLeft: '3px solid #DA352C',
    marginTop: '25px',
    boxSizing: 'border-box'
}))

export const CardGroup = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    gap: '30px',
    justifyContent: 'space-between'
}))

export const Card = styled('div')(() => ({
    width: '100%',
    minHeight: '100px',
    maxWidth: 'unset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '15px',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',

    ['@media (min-width: 768px)']: {
        fontSize: '16px',
        lineHeight: '20px',
        maxWidth: '500px',
        padding: '30px',
    },
    ['@media (min-width: 1200px)']: {
        minHeight: '200px',
        fontSize: '24px',
        lineHeight: '40px',
        maxWidth: '550px',
    }
}))

export const Wrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    justifyContent: 'center',
    alignItems: 'flex-start',
    ['@media (min-width: 768px)']: {
        gap: '50px'
    }
}))

export const Heading = styled('h2')(() => ({
    fontSize: '16px',
    marginTop: '25px',
    lineHeight: '20px',
    color: '#DA352C',
    ['@media (min-width: 768px)']: {
        fontSize: '24px',
        lineHeight: '28px'
    },
    ['@media (min-width: 1200px)']: {
        marginTop: '50px',
        fontSize: '40px',
        lineHeight: '48px'
    }
}))