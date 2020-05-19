import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'node-fetch'
import styled from 'styled-components'
import { Thumbnail } from '../components'

const Container = styled.div`
  text-align: center;
`

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

type photosArray = Array<Photo>

interface Props {
  photos: photosArray
}

export default function Home({ photos }: Props): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {photos.map(photo => (
        <Link href={`/details/${photo.id}`} key={photo.thumbnailUrl}>
          <a>
            <Thumbnail src={photo.thumbnailUrl} />
          </a>
        </Link>
      ))}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let photos = []

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    photos = (await res.json()).slice(0, 50)
  } catch (err) {
    console.error(err)
  }

  return { props: { photos } }
}
