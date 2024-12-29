import styled from "styled-components"

export const Wrapper = styled('div')(() => ({
    maxWidth: '1440px',
    padding: '0 20px',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
}))

export const ButtonGroup = styled('div')(() => ({
    display: 'flex',
    gap: '20px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10px',
    
    ['@media (min-width: 1200px)']: {
        marginTop: '25px',
        gap: '60px',
    }
}))

export const Button = styled('a')(() => ({
    padding: '5px 15px',
    backgroundColor: 'white',
    fontSize: '10px',
    fontFamily: 'Inter',
    fontWeight: '700',
    lineHeight: '11px',
    textDecoration: 'none',
    borderRadius: '50px',
    border: "none",
    color: '#DA352C',
    transition: 'all 0.125s ease',
    cursor: 'pointer',
    "&:hover": {
        opacity: '0.8',
    },

    ['@media (min-width: 768px)']: {
        fontSize: '14px',
        lineHeight: '20px',
    },
    ['@media (min-width: 1200px)']: {
        fontSize: '24px',
        lineHeight: '30px',
    }
}))

export const List = styled('ul')(() => ({
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',

    ['@media (min-width: 768px)']: {
        gap: '10px',
    },
    ['@media (min-width: 1200px)']: {
        gap: '30px',
    },
    '& li': {
        width: 'fit-content',
        fontSize: '11px',
        lineHeight: '14px',

        ['@media (min-width: 768px)']: {
            fontSize: '14px',
            lineHeight: '16px',
        },
        ['@media (min-width: 1200px)']: {
            fontSize: '24px',
            lineHeight: '30px',
        },
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
            },
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    }
}))

export const Heading = styled('h1')(() => ({
    fontSize: '20px',
    lineHeight: '25px',
    color: 'white',
    maxWidth: '800px',

    ['@media (min-width: 768px)']: {
        fontSize: '24px',
        lineHeight: '30px',
    },
    ['@media (min-width: 1200px)']: {
        fontSize: '40px',
        lineHeight: '48px',
    }
}))

export const Section = styled('section')(() => ({
    width: '100%',
    height: '200px',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    padding: '6px',
    boxSizing: 'border-box',
    background: 'url("/heroBackground.png")',
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
    ['@media (min-width: 768px)']: {
        height: '250px',
        padding: '8px',
    },
    ['@media (min-width: 1200px)']: {
        height: '535px',
        padding: '24px',
    }
}))