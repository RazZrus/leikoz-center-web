import styled from "styled-components";

export const Wrapper = styled('header')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 218px',
    height: '96px',
}))

export const Container = styled('div')(() => ({
    display: 'flex',
    gap: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    height: '100%',
}))

export const Link = styled('a')(() => ({
    fontFamily: 'Inter',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',
}))