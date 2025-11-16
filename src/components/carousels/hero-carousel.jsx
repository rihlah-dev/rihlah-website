import { useState, useEffect } from 'react'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Sample slides - replace with your actual images
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop',
      alt: 'Slide 1'
    },
    {
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1920&h=800&fit=crop',
      alt: 'Slide 2'
    },
    {
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=800&fit=crop',
      alt: 'Slide 3'
    }
  ]

  // Auto-scroll every 16 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 16000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Content overlay - you can customize this */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
            <p className="text-xl p-2">Assalamu Alaykum</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            WELCOME TO RIHLAH INSTITUTE
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lorem accumsan, placerat erat eu, pellentesque dictum libero.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}