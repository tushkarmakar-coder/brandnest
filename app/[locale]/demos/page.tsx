import DemoGallery from '@/components/DemoGallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Live Demos | BrandNest - See Our Work In Action",
  description: "Explore interactive demos of our web applications, AI tools, and e-commerce platforms built for startups and businesses.",
}

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <DemoGallery />
      </main>
      <Footer />
    </>
  )
}
