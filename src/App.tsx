import React, { useState, useEffect } from "react";
import { MemoryImage } from "./types";
import { FeaturedMemory } from "./components/FeaturedMemory";
import { MemoryCard } from "./components/MemoryCard";
import { MemoryViewer } from "./components/MemoryViewer";
import { 
  SunSVG, 
  CloudSVG, 
  ButterflySVG, 
  FlowerSVG, 
  RainbowSVG, 
  StarSVG, 
  PencilSVG,
  CrayonSVG,
  ABCBlockSVG 
} from "./components/DoodleDecoration";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Download, BookOpen } from "lucide-react";

export default function App() {
  const [images, setImages] = useState<MemoryImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<MemoryImage | null>(null);

  // Read images list from custom express server
  const loadImages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/images");
      if (res.ok) {
        const data = await res.json();
        setImages(data);
      }
    } catch (err) {
      console.error("Error loading scrapbook photos:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  // Carousel handlers
  const handlePrevImage = () => {
    if (!selectedImage || images.length === 0) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage || images.length === 0) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#F8F4EA] font-sans text-[#5A5A5A] selection:bg-amber-100 flex flex-col justify-between relative overflow-x-hidden p-0 m-0">
      
      {/* SUBTLE GRAIN & PAPER DRAWING STYLE EFFECT OVERLAY */}
      <div className="absolute inset-0 opacity-1 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/p6.png')] z-10" />

      {/* FIXED STICKY ALBUM DOWNLOAD BUTTON - BOTTOM RIGHT */}
      <div className="fixed bottom-6 right-6 z-30">
        <motion.a
          href="/api/download-all"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FFA7C4] hover:bg-[#EE96B3] text-[#5A5A5A] font-fredoka text-xs md:text-sm font-bold py-3 px-6 rounded-full border-2 border-[#5A5A5A] shadow-md flex items-center gap-2 cursor-pointer transition-shadow"
          title="Download Complete Album as ZIP"
        >
          {/* Small folder / gift package doodle style SVG */}
          <svg viewBox="0 0 40 40" className="w-5 h-5 stroke-[#5A5A5A] fill-none stroke-[2.5]" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="12" width="28" height="22" rx="3" strokeWidth="2.5" />
            <path d="M 6,12 L 18,12 L 22,17 L 34,17 L 34,12 L 6,12" strokeWidth="2.5" />
            <circle cx="20" cy="24" r="3" strokeWidth="2.5" />
          </svg>
          <span>Download Complete Album</span>
        </motion.a>
      </div>

      {/* TOP DECORATIVE CORNER DOODLES (Top Left: Sun doodle, Top Right: Cloud doodle) */}
      <div className="absolute top-4 left-4 lg:left-12 opacity-15 select-none pointer-events-none z-0">
        <SunSVG className="w-20 h-20" />
      </div>
      <div className="absolute top-4 right-4 lg:right-12 opacity-15 select-none pointer-events-none z-0">
        <CloudSVG className="w-24 h-16" />
      </div>

      {/* Header Board Section */}
      <header className="relative w-full max-w-4xl mx-auto pt-10 pb-8 px-4 text-center z-10">
        
        {/* Sun, Cloud, Rainbow drawn decorations surrounding school name without layout clutter */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <SunSVG className="w-8 h-8 opacity-25" />
          <RainbowSVG className="w-12 h-8 opacity-25" />
          <CloudSVG className="w-10 h-7 opacity-25" />
        </div>

        {/* School Name in beautiful handwritten display font */}
        <h1 className="font-crayon text-4xl md:text-6xl text-[#5A5A5A] tracking-tight font-black mb-1">
          Montessori
        </h1>
        
        {/* Subtitle in clean school typography */}
        <p className="font-crayon text-base md:text-xl text-[#7c6350] tracking-wide max-w-2xl mx-auto mb-5 italic">
          "The ordinary becomes extraordinary when viewed through a child's eyes."&nbsp;&nbsp;~Studio Ghibli
        </p>

        {/* Small pastel bar decorations for scrapbook theme */}
        <div className="flex gap-2.5 justify-center opacity-85 select-none pointer-events-none">
          <div className="w-6 h-2 rounded-full bg-[#78B7FF]" title="Blue crayon" />
          <div className="w-6 h-2 rounded-full bg-[#8ED081]" title="Green crayon" />
          <div className="w-6 h-2 rounded-full bg-[#FFD66B]" title="Yellow crayon" />
          <div className="w-6 h-2 rounded-full bg-[#FFA7C4]" title="Pink crayon" />
          <div className="w-6 h-2 rounded-full bg-[#FFB36B]" title="Orange crayon" />
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* TODAY FEATURED MEMORY BLOCK */}
        <section className="my-6">
          <FeaturedMemory onSelect={(img) => setSelectedImage(img)} />
        </section>

        {/* SUBTLE MIDDLE SECTION DECORATIVE DOODLES - Butterfly under 15% screenspace */}
        <div className="absolute left-[3%] top-[45%] opacity-15 select-none pointer-events-none">
          <ButterflySVG className="w-14 h-14" />
        </div>
        <div className="absolute right-[3%] top-[55%] opacity-15 select-none pointer-events-none">
          <ButterflySVG className="w-12 h-12" colorClass="fill-emerald-200" />
        </div>
        <div className="absolute left-[5%] top-[70%] opacity-15 select-none pointer-events-none">
          <StarSVG className="w-10 h-10" />
        </div>

        {/* MEMORY LEAVES SCRAPBOARD GRID */}
        <section className="py-10" id="main-scrapboard">
          
          <div className="border-b-2 border-dashed border-[#5A5A5A]/20 pb-4 mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h2 className="font-crayon text-2xl md:text-3xl font-bold text-[#5A5A5A] tracking-wide flex items-center justify-center sm:justify-start gap-2">
                <span>Priceless Little Moments</span>
              </h2>
            </div>
            
            {/* Real-time Counter Badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full mx-auto sm:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#FFD66B] animate-pulse"></span>
              <span className="font-fredoka text-[11px] text-[#7C6350] font-semibold">
                {images.length} Captured Images
              </span>
            </div>
          </div>

          {/* Album thumbnails list */}
          {loading && images.length === 0 ? (
            <div className="py-32 text-center flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-3 border-[#5A5A5A] border-dashed rounded-full animate-spin"></div>
              <p className="font-crayon text-xs opacity-75">Reading student scrapbook shelves...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
              {images.map((image, index) => (
                <MemoryCard
                  key={image.id}
                  image={image}
                  index={index}
                  onSelect={(img) => setSelectedImage(img)}
                />
              ))}
            </div>
          )}
        </section>

      </main>

      {/* BOTTOM GRASS AND FLOWERS DECORATIONS - placed elegantly near footer */}
      <div className="w-full max-w-5xl mx-auto flex justify-between px-10 md:px-20 -mb-6 relative z-0 pointer-events-none select-none opacity-20">
        <FlowerSVG className="w-14 h-16" colorClass="text-rose-300" />
        <FlowerSVG className="w-12 h-14" colorClass="text-purple-300" />
        <FlowerSVG className="w-16 h-20" colorClass="text-yellow-300" />
        <FlowerSVG className="w-14 h-16" colorClass="text-sky-300" />
      </div>

      {/* Main Footer Column */}
      <footer className="w-full bg-[#F4EDE0] border-t-2 border-[#5A5A5A] py-14 px-6 relative z-10">
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          
          {/* Custom cartoon crayon box illustration inside footer */}
          <div className="flex flex-col items-center select-none pointer-events-none">
            <span className="font-crayon text-xs text-[#7c6350] mb-2 block font-extrabold">Crayons Portfolio</span>
            <svg viewBox="0 0 100 80" className="w-32 h-24 drop-shadow-sm">
              {/* Back side of carton */}
              <rect x="25" y="30" width="50" height="45" fill="#fcd34d" stroke="#5A5A5A" strokeWidth="2.5" />
              {/* Inside crayons tips peaking upwards */}
              <g>
                {/* Blue crayon tip */}
                <path d="M 31,30 L 31,10 L 35,5 L 39,10 L 39,30 Z" fill="#78B7FF" stroke="#5A5A5A" strokeWidth="1.5" />
                {/* Yellow crayon tip */}
                <path d="M 40,30 L 40,8 L 44,3 L 48,8 L 48,30 Z" fill="#FFD66B" stroke="#5A5A5A" strokeWidth="1.5" />
                {/* Pink crayon tip */}
                <path d="M 49,30 L 49,6 L 53,1 L 57,6 L 57,30 Z" fill="#FFA7C4" stroke="#5A5A5A" strokeWidth="1.5" />
                {/* Green crayon tip */}
                <path d="M 58,30 L 58,11 L 62,6 L 66,11 L 66,30 Z" fill="#8ED081" stroke="#5A5A5A" strokeWidth="1.5" />
                {/* Orange crayon tip */}
                <path d="M 67,30 L 67,14 L 71,9 L 75,14 L 75,30 Z" fill="#FFB36B" stroke="#5A5A5A" strokeWidth="1.5" />
              </g>
              {/* Front flap profile */}
              <polygon points="25,40 50,45 75,40 75,75 25,75" fill="#eab308" stroke="#5A5A5A" strokeWidth="2.5" />
              {/* Box text doodle line */}
              <text x="32" y="62" fontFamily="monospace" fontSize="10px" fill="#5A5A5A" fontWeight="bold">CRAYONS</text>
            </svg>
          </div>

          {/* School Name & short tagline */}
          <div className="space-y-2">
            <h4 className="font-crayon text-lg text-[#5A5A5A] font-extrabold mb-1">
              Montessori
            </h4>
            <p className="font-sans text-xs text-[#7c6350] leading-relaxed">
              We focus purely on children's natural work, creative canvas art, outdoor nature walks, and sensory logic.
            </p>
          </div>

          {/* Sincere photographer licensing credit inside footer */}
          <div className="bg-[#FAF5E9]/50 border-2 border-dashed border-[#5A5A5A]/10 p-4 rounded-2xl text-center md:text-right">
            <p className="font-sans text-xs text-[#5A5A5A] leading-relaxed">
              All beautiful milestones photographed by:<br />
              <a
                href="https://pricelesscapture.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-crayon font-black text-amber-800 hover:text-amber-600 hover:underline inline-flex items-center gap-0.5"
              >
                Priceless Capture 📸
              </a>
            </p>
            <span className="font-mono text-[9px] text-[#5A5A5A]/50 block mt-2">
              © 2026 Montessori. All rights reserved.
            </span>
          </div>

        </div>

      </footer>

      {/* IMMERSIVE LIGHTBOX GALLERY VIEWER CONTAINER */}
      <AnimatePresence>
        {selectedImage && (
          <MemoryViewer
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
