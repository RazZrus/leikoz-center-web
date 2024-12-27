import styled from "styled-components"

export const Block = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
}))

export const Contacts = styled('div')(() => ({
    display: 'flex',
    gap: '15px',
    '> a': {
        color: 'white',
        fontSize: '12px',
        lineHeight: '20px',
        maxWidth: '140px',
        cursor: 'pointer'
    }
}))

export const LeftBlock = styled(Block)(() => ({
    '> div > p': {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
        color: 'white',
    }
}))

export const RightBlock = styled(Block)(() => ({ 
    '> img': {
        width: '222px',
        height: 'auto',
    },
    '> p': {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
        color: 'white',
    }
}))

export const Container = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}))

export const LogoWrapper = styled('div')(() => ({
    display: 'grid',
    color: 'white',
    fontSize: '16px',
    width: 'fit-content',
    gap: '8px',
    lineHeight: '20px',
    gridTemplateAreas: `"logo text text"
                        "logo mail mail"
                        `,
}))

export const LogoText = styled('p')(() => ({
    gridArea: 'text',
    maxWidth: '124px',
}))

export const LogoMail = styled('a')(() => ({
    color: "white",
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 400,
    textDecoration: 'none',
    cursor: 'pointer',
    gridArea: 'mail',
}))

export const Wrapper = styled('footer')(() => ({
    background: '#DA352C',
    padding: '30px 0',
}))