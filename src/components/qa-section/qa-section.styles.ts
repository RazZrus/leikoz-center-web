import styled from "styled-components"

export const TextLink = styled('a')(() => ({
    textDecoration: 'none',
    color: '#DA352C',
    '&:hover': {
        textDecoration: 'underline',
    }
}))

export const Accordion = styled('div')(() => ({
    margin: '50px',
}))

export const Summary = styled('summary')(() => ({
    padding: '35px 0',
    fontFamily: 'Inter',
    fontSize: '16px',
    lineHeight: '20px',
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
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 400,
    padding: '0 20px'
}))