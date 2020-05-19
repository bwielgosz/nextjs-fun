import { GetServerSideProps } from 'next'
import fetch from 'node-fetch'
import styled from 'styled-components'
import { Headline, Image, Link } from '../../components'

const Container = styled.div`
  text-align: center;
`

interface Props {
  title: string | undefined
  url: string | undefined
}

export default function DetailsPage({ title, url }: Props): JSX.Element {
  return (
    <Container>
      {title && url ? (
        <>
          <Headline>{title}</Headline>
          <Image src={url} />
          <Link href="/">Go to gallery</Link>
        </>
      ) : (
        <p>could not fetch data</p>
      )}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  let item = {}

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${ctx.params.id}`)
    const { title, url } = await res.json()

    item = {
      title,
      url,
    }
  } catch (err) {
    console.error(err)
  }

  return { props: { ...item } }
}
