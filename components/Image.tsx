import styled from 'styled-components'

const Img = styled.img`
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px #333;
  display: block;
  margin: 0 auto 20px auto;
`

interface Props {
  src: string
}

export function Image({ src }: Props): JSX.Element {
  return <Img src={src} />
}
