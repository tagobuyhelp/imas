import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    interval?: number;
    showControls?: boolean;
    showIndicators?: boolean;
    className?: string;
}

export function Carousel({
    images,
    autoPlay = true,
    interval = 5000,
    showControls = true,
    showIndicators = true,
    className = ""
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            {/* Images Container */}
            <div className="relative h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            {showControls && (
                <>
                    <Button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
                        size="sm"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
                        size="sm"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </>
            )}

            {/* Indicators */}
            {showIndicators && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white scale-110'
                                    : 'bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
