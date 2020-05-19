import styled from 'styled-components'

const H1 = styled.h1`
  color: #f00;
  font-size: 3rem;
`

export function Headline({ children }): JSX.Element {
  return <H1>{children}</H1>
}
