import React, { useState, useEffect, useCallback } from 'react';
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
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
    const [isLoading, setIsLoading] = useState(true);

    // Preload images
    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = images.map((src, index) => {
                return new Promise<void>((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        setLoadedImages(prev => new Set([...prev, index]));
                        resolve();
                    };
                    img.onerror = () => {
                        setImageErrors(prev => new Set([...prev, index]));
                        resolve();
                    };
                    img.src = src;
                });
            });

            await Promise.all(imagePromises);
            setIsLoading(false);
        };

        preloadImages();
    }, [images]);

    useEffect(() => {
        if (!autoPlay || isLoading) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length, isLoading]);

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
            {/* Loading State */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                    <div className="text-gray-500">Loading images...</div>
                </div>
            )}

            {/* Images Container */}
            <div className="relative h-full">
                {images.map((image, index) => {
                    const isImageLoaded = loadedImages.has(index);
                    const hasImageError = imageErrors.has(index);
                    const shouldShow = index === currentIndex && !isLoading;

                    return (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                shouldShow ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {hasImageError ? (
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    <div className="text-gray-500">Image unavailable</div>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                                            isImageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        loading="eager"
                                        decoding="async"
                                    />
                                    {!isImageLoaded && (
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                            <div className="text-gray-500">Loading...</div>
                                        </div>
                                    )}
                                </>
                            )}
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/30"></div>
                        </div>
                    );
                })}
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
