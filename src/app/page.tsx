import { db } from 'src/server/db'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const images = await db.query.images.findMany()

  return (
    <main className="">
      <div className="flex flex-wrap gap-6">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />

            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
