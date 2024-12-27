import styled from "styled-components";

export const Wrapper = styled('header')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    height: '96px',
    zIndex: 0,
}))

export const Container = styled('div')(() => ({
    display: 'flex',
    gap: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    height: '100%',
    '> .logoLink': {
        height: '100%',
        width: 'fit-content',
    },
    '> .logoLink > img': {
        height: '100%',
        width: 'auto'
    }
}))

export const Link = styled('a')(() => ({
    fontFamily: 'Inter',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.125s ease',
    '&:hover': {
        borderBottom: '3px black solid'
    }
}))