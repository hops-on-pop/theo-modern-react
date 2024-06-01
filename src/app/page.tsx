import { db } from 'src/server/db'

export const dynamic = 'force-dynamic'

const mockUrls = [
  'https://utfs.io/f/8f78bc2a-b6ed-4873-adee-94939798a7e2-sncx7p.jpg',
  'https://utfs.io/f/6187e4bd-29ed-4cb0-973d-0113d5c77984-yryulu.png',
  'https://utfs.io/f/2c96316e-e023-4182-9aff-3b39f9bdf73c-er0mhc.jpg',
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()

  {
    console.log('posts:', posts)
  }

  return (
    <main className="">
      <div className="flex flex-wrap gap-6">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}

        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
      Hello (In Progress)
    </main>
  )
}
