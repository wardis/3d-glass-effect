import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/scene'), {
  ssr: false,
  loading: () => (
    <div className="text-white grid place-items-center place-content-center h-full">
      <p className="text-white">Loading...</p>
    </div>
  ),
})

export default function Home() {
  return (
    <main className="h-screen bg-black relative">
      <Scene />
    </main>
  )
}
