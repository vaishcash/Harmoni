"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Up to 50% off on selected items",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=400&fit=crop",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Check out our latest products",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1600&h=400&fit=crop",
    buttonText: "Explore",
  },
  {
    id: 3,
    title: "Special Deals",
    description: "Limited time offers on premium brands",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=400&fit=crop",
    buttonText: "View Deals",
  },
 
];

export default function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner) => (
            <div key={banner.id} className="relative flex-[0_0_100%] min-w-0">
              <div
                className="relative h-[400px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                  <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                  <p className="text-xl mb-8">{banner.description}</p>
                  <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
