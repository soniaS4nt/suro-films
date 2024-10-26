import Footer from '@/movie/components/Footer'
import NavBar from '@/movie/components/NavBar'

export default function Layout({ children }) {
  return (
    <div className="bg-black">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
