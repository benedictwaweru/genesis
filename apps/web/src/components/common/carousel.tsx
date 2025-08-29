import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface EcommerceCarouselProps<T> {
  carouselItems: Array<T>;
  getImageSrc?: (item: T) => string;
  getAltText?: (item: T, index: number) => string;
}

export function EcommerceCarousel<T>({
  carouselItems,
  getImageSrc,
  getAltText,
}: EcommerceCarouselProps<T>) {
  return (
    <Carousel className="w-[90vw]">
      <CarouselContent>
        {carouselItems.map((carouselItem, index) => {
          const src =
            typeof carouselItem === 'string'
              ? carouselItem
              : (getImageSrc?.(carouselItem) ?? '');
          const alt =
            getAltText?.(carouselItem, index) ??
            (typeof carouselItem === 'string' ? `Slide ${index + 1}` : '');

          return (
            <CarouselItem key={index}>
              <img
                src={src}
                className="w-full h-[400px] object-cover rounded-lg"
                alt={alt}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
