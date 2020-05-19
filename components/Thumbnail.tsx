import styled from 'styled-components'

const Img = styled.img`
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 1px 2px 3px 0.2px #123;
  margin: 5px;

  &:hover {
    box-shadow: 2px 3px 3px 1px #123;
  }
`

interface Props {
  src: string
}

export function Thumbnail({ src }: Props): JSX.Element {
  return <Img src={src} />
}
