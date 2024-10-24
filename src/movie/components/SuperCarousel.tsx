'use client'
import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Img from './Img'
import { MovieI } from '../types'

export default function SuperCarousel({ movies }: { movies: MovieI[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault()
        scrollRef.current.scrollLeft += e.deltaY
      }
    }

    const currentRef = scrollRef.current
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <div className="relative w-full mx-auto py-8">
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`relative flex-shrink-0 h-[30vw] transition-all duration-500 ease-in-out ${
              hoveredIndex === index ? 'w-[40vw]' : 'w-[20vw]'
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Img
              src={movie.backdrop_path}
              alt={movie.title}
              className="w-full h-full object-cover rounded-lg"
              height={200}
              width={200}
            />
            {hoveredIndex === index && (
              <div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-6 rounded-b-lg transition-opacity duration-300 ease-in-out"
                style={{ opacity: hoveredIndex === index ? 1 : 0 }}
              >
                <h3 className="text-2xl font-bold mb-3">{movie.title}</h3>
                <button className="text-white border-white hover:bg-white hover:text-black transition-colors">
                  Watch Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={() => handleScroll('left')}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={() => handleScroll('right')}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
