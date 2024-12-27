import { FC, HTMLProps } from 'react'
import { CSSProperties } from 'styled-components'
import { Container, Wrapper } from './global-container.styles'

interface GlobalContainerProps extends HTMLProps<HTMLDivElement> {
    wrapperStyles?: CSSProperties,
    containerStyles?: CSSProperties,
}

export const GlobalContainer: FC<GlobalContainerProps> = ({ wrapperStyles, containerStyles, children }) => {
  return (
    <Wrapper style={wrapperStyles}>
        <Container style={containerStyles}>
            {children}
        </Container>
    </Wrapper>
  )
}