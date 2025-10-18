import { prisma } from "@/utils/db"

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorId: true,
      authorName: true,
      authorImage: true,
      createdAt: true
    }
  })

  return data
}

// ✅ Make sure this is the actual export
export default async function Home() {
  const data = await getData()

  // Add this for debugging
  console.log("Fetched data:", data)

  return (
    <div className="py-6">
      <h1 className="text-3xl mb-8 font-semibold tracking-tighter">Latest post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
