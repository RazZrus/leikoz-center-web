import styled from "styled-components"

export const Wrapper = styled('div')(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const Container = styled("div")(() => ({
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 20px',
    maxWidth: '1400px',
}))