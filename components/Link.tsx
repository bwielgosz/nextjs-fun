import styled from 'styled-components'
import LinkNext from 'next/link'

const AnchorTag = styled.a`
  color: #000;
  font-size: 2rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export function Link({ href, children }): JSX.Element {
  return (
    <LinkNext href={href} passHref>
      <AnchorTag>{children}</AnchorTag>
    </LinkNext>
  )
}
