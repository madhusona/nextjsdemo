import { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Head from 'next/head'
import Post from '../components/post'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Grid from '@material-ui/core/Grid';

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries(
      {
        'content_type': 'product'
      }
    )
    if (entries.items) {
      console.log(entries.items)
      return entries.items
    }
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      
      
      <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
       

</Grid>
           
     
      
    </>
  )
}

export default HomePage