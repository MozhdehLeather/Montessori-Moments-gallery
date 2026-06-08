import React, { useEffect, useState } from "react";
import { MemoryImage } from "../types";
import { X, ArrowLeft, ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

interface MemoryViewerProps {
  image: MemoryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const MemoryViewer: React.FC<MemoryViewerProps> = ({ image, onClose, onPrev, onNext }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, onClose]);

  // Swiping support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipe = 50; // minimum translation in px
    if (distance > minSwipe) {
      onNext();
    } else if (distance < -minSwipe) {
      onPrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 md:p-8 bg-[#1C1613]/95 backdrop-blur-xs">
      
      {/* Click outside to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Centered Image Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 w-full max-w-3xl flex flex-col items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Main Photo Card Frame */}
        <div className="bg-white p-3 md:p-5 rounded-3xl border-4 border-[#5A5A5A] pencil-shadow-lg w-full">
          <div className="relative overflow-hidden rounded-2xl flex items-center justify-center bg-[#FBFBFB]">
            <img
              src={image.download}
              alt={image.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[65vh] object-contain rounded-xl select-none"
            />
          </div>

          {/* Core Captions beneath photo inside frame */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 px-1 pb-1">
            <div className="text-left">
              <h4 className="font-crayon text-base md:text-xl text-[#5A5A5A] font-bold">
                Image #{image.id}
              </h4>
            </div>

            {/* Direct Instant Downloader */}
            <a
              href={image.download}
              download={`Image_${image.id}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start sm:self-center py-2 px-5 bg-[#FFD66B] hover:bg-[#F0C75C] text-[#5A5A5A] font-fredoka text-xs font-bold rounded-full border-2 border-[#5A5A5A] pencil-shadow transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Image</span>
            </a>
          </div>
        </div>

        {/* Carousel controls bar */}
        <div className="flex items-center gap-6 mt-6 z-20">
          
          {/* ← Previous */}
          <button
            onClick={onPrev}
            className="w-12 h-12 rounded-full bg-white border-2 border-[#5A5A5A] text-[#5A5A5A] flex items-center justify-center hover:bg-[#F8F4EA] transition-transform hover:scale-110 active:scale-90 cursor-pointer pencil-shadow"
            title="← Previous"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* ✕ Close */}
          <button
            onClick={onClose}
            className="px-6 h-12 rounded-full bg-[#FFA7C4] border-2 border-[#5A5A5A] text-[#5A5A5A] font-fredoka text-sm font-bold flex items-center justify-center hover:bg-[#EE96B3] transition-transform hover:scale-110 active:scale-90 cursor-pointer pencil-shadow"
            title="Close"
          >
            <X className="w-4 h-4 mr-1.5 stroke-[2.5]" />
            <span>Close</span>
          </button>

          {/* → Next */}
          <button
            onClick={onNext}
            className="w-12 h-12 rounded-full bg-white border-2 border-[#5A5A5A] text-[#5A5A5A] flex items-center justify-center hover:bg-[#F8F4EA] transition-transform hover:scale-110 active:scale-90 cursor-pointer pencil-shadow"
            title="→ Next"
          >
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

      </motion.div>

    </div>
  );
};
