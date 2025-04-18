/* eslint-disable react-hooks/rules-of-hooks */
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { useCallback, useEffect, useState } from "react";

const PortPhotosViewer = ({photos, currentIndex, isOpen, onClose, onNavigate}) => {


    const [loading, setLoading] = useState(true);
    const [direction, setDirection] = useState(null);
    const [animating, setAnimating] = useState(false);


    const currentPhoto = photos[currentIndex];

    const preloadImages = useCallback((index) => {
        const imagesToPreload = [];
        
        // Preload current image
        if (photos[index]) {
          const img = new Image();
          img.src = photos[index].src;
          imagesToPreload.push(img);
        }
        
        // Preload next image
        if (photos[index + 1]) {
          const img = new Image();
          img.src = photos[index + 1].src;
          imagesToPreload.push(img);
        }
        
        // Preload previous image
        if (photos[index - 1]) {
          const img = new Image();
          img.src = photos[index - 1].src;
          imagesToPreload.push(img);
        }
        
        return imagesToPreload;
    }, [photos]);
    
    const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    
    if (e.key === 'Escape') {
        onClose();
    } else if (e.key === 'ArrowRight') {
        handleNext();
    } else if (e.key === 'ArrowLeft') {
        handlePrev();
    }
    }, [isOpen, onClose, currentIndex, photos.length]);

    const handleNext = () => {
        if (animating) return;
        if (currentIndex < photos.length - 1) {
          setDirection('next');
          setAnimating(true);
          setTimeout(() => {
            onNavigate(currentIndex + 1);
            setAnimating(false);
          }, 300);
        }
    };


    const handlePrev = () => {
        if (animating) return;
        if (currentIndex > 0) {
          setDirection('prev');
          setAnimating(true);
          setTimeout(() => {
            onNavigate(currentIndex - 1);
            setAnimating(false);
          }, 300);
        }
    };


    useEffect(() => {
        setLoading(true);
        const images = preloadImages(currentIndex);
        
        const handleLoad = () => {
          setLoading(false);
        };
        
        if (images.length > 0) {
          images[0].onload = handleLoad;
        }
        
        return () => {
          if (images.length > 0) {
            images[0].onload = null;
          }
        };
    }, [currentIndex, preloadImages]);
    
    useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [handleKeyDown]);

    if (!isOpen) return null;

    return (
        <div className={`gallery-overlay ${isOpen ? 'active' : ''}`}>
          <div className="gallery-overlay-bg">
            <button 
              onClick={onClose}
              className="gallery-overlay-bg-cls"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="gallery-overlay-display">
            <div 
              className={`gallery-overlay-display-inner
                ${loading ? 'transparency' : 'showtransparency'} 
                ${direction === 'next' ? 'animate-slide-in' : direction === 'prev' ? 'animate-slide-out' : ''}`}
            >
              {currentPhoto && (
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  onLoad={() => setLoading(false)}
                />
              )}
            </div>
            
            {loading && (
              <div className="loading">
                <div className="loading-inner"></div>
              </div>
            )}
          </div>
    
          {currentIndex > 0 && (
            <button 
              onClick={handlePrev}
              className="gallery-navigation prev"
              aria-label="Previous image"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          
          {currentIndex < photos.length - 1 && (
            <button 
              onClick={handleNext}
              className="gallery-navigation next"
              aria-label="Next image"
            >
              <ArrowRight size={24} />
            </button>
          )}
          
          {/* <div className=".gallery-length">
            <div className="gallery-length-inner">
              {currentIndex + 1} / {photos.length}
            </div>
          </div> */}
        </div>
      );
}

export default PortPhotosViewer