import { useEffect, useState } from 'react'
import Post from '../components/post'

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
    <div class="container">
    {posts.length > 0
      ? posts.map((p) => (
        <Post
          alt={p.fields.productName}
          date={p.fields.productDescription}
        //  key={p.fields.title}
          url={p.fields.image}
        />
      ))
      : null}
      </div>
  )
}

export default HomePage