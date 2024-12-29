import styled from "styled-components"

export const TextLink = styled('a')(() => ({
    textDecoration: 'none',
    color: '#DA352C',
    '&:hover': {
        textDecoration: 'underline',
    }
}))

export const Accordion = styled('div')(() => ({
    margin: '10px 0 30px',

    ['@media (min-width: 768px)']: {
        margin: '50px',
    }
}))

export const Summary = styled('summary')(() => ({
    padding: '20px 0',
    fontFamily: 'Inter',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 700,
    color: '#DA352C',
    display: 'flex',
    listStyle: 'none',
    cursor: 'pointer',
    justifyContent: 'space-between',
    alignItems: 'center',
    '> img': {
        transition: 'all 0.25s ease',
        width: '15px',
        height: 'auto',
        transform: 'rotate(180deg)',
    },

    ['@media (min-width: 768px)']: {
        padding: '35px 0',
        fontSize: '26px',
        lineHeight: '32px',
    }
}))

export const Details = styled('details')(() => ({
    '&[open]': {
        backgroundColor: '#F0F0F0',
        padding: '20px',
        '> summary:first-of-type > img': {
            transform: 'rotate(0deg)',
        }
    },
    "&:hover": {
        backgroundColor: '#F0F0F0',
    },
    transition: 'all 0.25s ease',
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 400,
    padding: '0 20px',

    ['@media (min-width: 768px)']: {
        fontSize: '16px',
        lineHeight: '20px',
    }
}))