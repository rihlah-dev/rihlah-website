import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../components/ui/carousel"
  
  export default function MyCarousel() {
    return (
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 border rounded">
                <span className="text-4xl font-semibold">1</span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 border rounded">
                <span className="text-4xl font-semibold">2</span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <div className="flex aspect-square items-center justify-center p-6 border rounded">
                <span className="text-4xl font-semibold">3</span>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }