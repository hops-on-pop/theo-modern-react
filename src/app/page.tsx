import { SignedIn, SignedOut } from '@clerk/nextjs'
import { db } from 'src/server/db'

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await db.query.images.findMany()

  return (
    <div className="flex flex-wrap gap-6 p-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="" />

          <div>{image.name}</div>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="flex flex-col">
      <SignedOut>
        <div className="w-full h-full text-2xl px-4">
          <h1>Sign In above to begin</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  )
}
