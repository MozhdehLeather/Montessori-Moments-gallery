import React from "react";
import { MemoryImage } from "../types";
import { motion } from "motion/react";
import { Download } from "lucide-react";

interface MemoryCardProps {
  image: MemoryImage;
  onSelect: (image: MemoryImage) => void;
  index: number;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ image, onSelect, index }) => {
  // Angle for photo tilts
  const tilts = [-2, 3, 0];
  const angle = tilts[index % 3];

  // Colors: Crayon Blue, Green, Yellow, Pink, Orange (lightly)
  const crayonColors = ["#78B7FF", "#8ED081", "#FFD66B", "#FFA7C4", "#FFB36B"];
  const borderColor = crayonColors[index % crayonColors.length];

  return (
    <motion.div
      id={`memory-card-${image.id}`}
      style={{ rotate: angle }}
      whileHover={{
        y: -5,
        rotate: 0,
        zIndex: 10,
        boxShadow: "0px 10px 15px rgba(90, 90, 90, 0.15)"
      }}
      transition={{ duration: 0.12, ease: "easeOut" }}
      className="relative p-3.5 pb-4.5 rounded-2xl bg-white border-2 border-[#5A5A5A] pencil-shadow cursor-pointer select-none"
      onClick={() => onSelect(image)}
    >
      
      {/* Hand-drawn paper tape corner 1 (top-left) */}
      <div 
        className="absolute -top-1.5 -left-2.5 w-10 h-4 bg-[#fefeeb]/85 border-x border-dashed border-[#5A5A5A]/30 opacity-90 z-20"
        style={{ transform: "rotate(-35deg)" }}
      />
      
      {/* Hand-drawn paper tape corner 2 (bottom-right) */}
      <div 
        className="absolute -bottom-1 -right-2 w-10 h-4 bg-[#fefeeb]/85 border-x border-dashed border-[#5A5A5A]/30 opacity-90 z-20"
        style={{ transform: "rotate(-30deg)" }}
      />

      {/* Frame Container with hand-drawn border color */}
      <div 
        className="relative rounded-xl overflow-hidden bg-[#FBFBFB] p-1.5"
        style={{ border: `4px solid ${borderColor}` }}
      >
        <img
          src={image.thumb}
          alt={`Image #${image.id}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full aspect-4/3 object-cover rounded-lg"
        />
      </div>

      {/* Minimalistic human label and Direct download button */}
      <div className="mt-3 px-0.5 text-center flex flex-col items-center">
        <h4 className="font-crayon text-base text-[#5A5A5A] font-bold tracking-tight truncate w-full">
          Image #{image.id}
        </h4>
        
        <a
          href={image.download}
          download={`Image_${image.id}.jpg`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-2.5 flex items-center justify-center gap-1 w-full py-1.5 px-3 bg-[#FFD66B] hover:bg-[#F0C75C] text-[#5A5A5A] font-fredoka text-xs font-bold rounded-full border border-[#5A5A5A] transition-colors cursor-pointer"
        >
          <Download className="w-3 h-3 stroke-[2.5]" />
          <span>Download Image</span>
        </a>
      </div>

    </motion.div>
  );
};

