import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CloudSVG, SunSVG, TreeSVG, FlowerSVG, BirdSVG } from "./DoodleDecoration";

interface SchoolGateProps {
  onEnter: () => void;
}

export const SchoolGate: React.FC<SchoolGateProps> = ({ onEnter }) => {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#FAF5E9]">
      
      {/* Background illustrated paper clouds, birds drift slowly */}
      <div className="absolute top-10 left-[10%] opacity-70 animate-pulse duration-5000">
        <CloudSVG className="w-24 h-16 text-white" />
      </div>
      <div className="absolute top-20 right-[15%] opacity-60 animate-bounce duration-[10000ms]">
        <CloudSVG className="w-28 h-20 text-white" />
      </div>
      <div className="absolute top-12 right-[45%] opacity-40">
        <BirdSVG className="w-10 h-10 text-[#5a4b3d]" />
      </div>
      <div className="absolute top-28 left-[30%] opacity-40 animate-pulse">
        <BirdSVG className="w-8 h-8 text-[#5a4b3d]" />
      </div>

      {/* Sun peeking through */}
      <div className="absolute top-6 left-12 md:left-[22%] text-amber-300">
        <SunSVG className="w-20 h-20" />
      </div>

      {/* Side forest background */}
      <div className="absolute bottom-[-10px] left-0 pointer-events-none opacity-90 hidden sm:block">
        <div className="flex gap-2 items-end">
          <TreeSVG className="w-28 h-36" />
          <TreeSVG className="w-20 h-28 opacity-80" />
        </div>
      </div>
      <div className="absolute bottom-[-10px] right-0 pointer-events-none opacity-90 hidden sm:block">
        <div className="flex gap-2 items-end flex-row-reverse">
          <TreeSVG className="w-28 h-36" />
          <TreeSVG className="w-22 h-26 opacity-80" />
        </div>
      </div>

      {/* Ground flowers */}
      <div className="absolute bottom-0 left-[20%] pointer-events-none">
        <FlowerSVG className="w-12 h-14" colorClass="text-rose-300" />
      </div>
      <div className="absolute bottom-2 left-[28%] pointer-events-none">
        <FlowerSVG className="w-10 h-11" colorClass="text-purple-300" />
      </div>
      <div className="absolute bottom-0 right-[25%] pointer-events-none">
        <FlowerSVG className="w-11 h-13" colorClass="text-yellow-300" />
      </div>
      <div className="absolute bottom-1 right-[18%] pointer-events-none">
        <FlowerSVG className="w-10 h-12" colorClass="text-sky-300" />
      </div>

      {/* Symmetrical Left and Right Gates */}
      <div className="absolute inset-0 flex">
        
        {/* Left Wooden Gate Panel */}
        <motion.div
          id="gate-left"
          className="w-1/2 h-full bg-[#EADDCA] border-r-4 border-[#5a4b3d] flex flex-col justify-center items-end relative overflow-hidden origin-left"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #dfcfbb, #dfcfbb 40px, #d4bfab 41px, #d4bfab 42px)`,
            boxShadow: "inset -10px 0 20px rgba(90, 75, 61, 0.15)"
          }}
        >
          {/* Wood grains and nail heads */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern-placeholder.png')]"></div>
          
          {/* Left Door Strap Hinges */}
          <div className="absolute top-[20%] right-0 w-24 h-4 bg-[#5a4b3d] rounded-l-md pencil-shadow"></div>
          <div className="absolute top-[50%] right-0 w-32 h-4 bg-[#5a4b3d] rounded-l-md pencil-shadow"></div>
          <div className="absolute top-[80%] right-0 w-24 h-4 bg-[#5a4b3d] rounded-l-md pencil-shadow"></div>

          {/* Left Door cross braces */}
          <div className="absolute bottom-16 right-8 w-12 h-[75%] border-4 border-[#5a4b3d] bg-amber-800/10 rounded-lg pointer-events-none opacity-40"></div>
          
          {/* Semicircle Wooden Welcome Sign (Left Half) */}
          <div className="absolute right-0 top-[25%] h-24 w-48 bg-[#9b6a4a] border-y-4 border-l-4 border-l-[#5a4b3d] border-y-[#5a4b3d] rounded-l-full flex items-center justify-end pr-3 pencil-shadow">
            <span className="font-fredoka text-xl md:text-3xl text-[#FAF5E9] tracking-wider text-right select-none font-bold">
              LITTLE<br/>EXPLORERS
            </span>
          </div>

          {/* School Fence Posts (Left side detail) */}
          <div className="absolute bottom-8 left-4 flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-36 bg-[#E1C699] border-2 border-[#5a4b3d] rounded-t-full relative">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#5a4b3d] rounded-full"></div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right Wooden Gate Panel */}
        <motion.div
          id="gate-right"
          className="w-1/2 h-full bg-[#EADDCA] border-l-4 border-[#5a4b3d] flex flex-col justify-center items-start relative overflow-hidden origin-right"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 0 }}
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #dfcfbb, #dfcfbb 40px, #d4bfab 41px, #d4bfab 42px)`,
            boxShadow: "inset 10px 0 20px rgba(90, 75, 61, 0.15)"
          }}
        >
          {/* Wood grains & textures */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern-placeholder.png')]"></div>
          
          {/* Right Door Strap Hinges */}
          <div className="absolute top-[20%] left-0 w-24 h-4 bg-[#5a4b3d] rounded-r-md pencil-shadow"></div>
          <div className="absolute top-[50%] left-0 w-32 h-4 bg-[#5a4b3d] rounded-r-md pencil-shadow"></div>
          <div className="absolute top-[80%] left-0 w-24 h-4 bg-[#5a4b3d] rounded-r-md pencil-shadow"></div>

          {/* Right Door cross braces */}
          <div className="absolute bottom-16 left-8 w-12 h-[75%] border-4 border-[#5a4b3d] bg-amber-800/10 rounded-lg pointer-events-none opacity-40"></div>

          {/* Semicircle Wooden Welcome Sign (Right Half) */}
          <div className="absolute left-0 top-[25%] h-24 w-48 bg-[#9b6a4a] border-y-4 border-r-4 border-r-[#5a4b3d] border-y-[#5a4b3d] rounded-r-full flex items-center justify-start pl-3 pencil-shadow">
            <span className="font-fredoka text-xl md:text-3xl text-[#FAF5E9] tracking-wider text-left select-none font-bold">
              MONTESSORI<br/>GALLERY
            </span>
          </div>

          {/* School Fence Posts (Right side detail) */}
          <div className="absolute bottom-8 right-4 flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-6 h-36 bg-[#E1C699] border-2 border-[#5a4b3d] rounded-t-full relative">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#5a4b3d] rounded-full"></div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Floating Center Button Platform overlapping the gates */}
      <div className="absolute z-10 flex flex-col items-center">
        {/* Soft handdrawn title card representing standard chalkboard sign */}
        <div className="bg-[#1C3B2B] text-white border-4 border-[#cda270] rounded-xl px-6 py-4 mb-8 pencil-shadow text-center max-w-xs md:max-w-md">
          <div className="font-crayon text-[#fef08a] text-lg mb-1">
            🌸 "Where little steps explorer big worlds" 🌸
          </div>
          <p className="font-sans text-xs text-emerald-100 opacity-90 font-light">
            An illustrated memory book of classroom story-crafts, wood counting work, and joyful focus.
          </p>
        </div>

        {/* Big Entry Crayon Button */}
        <motion.button
          id="enter-gallery-button"
          onClick={onEnter}
          whileHover={{ scale: 1.1, rotate: [-1, 2, -2, 0] }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-500 hover:bg-amber-400 text-[#5a4b3d] font-fredoka text-2xl md:text-4xl font-bold py-4 px-10 rounded-full pencil-border pencil-shadow-lg transition-colors cursor-pointer flex items-center gap-3 active:scale-95 group"
        >
          <span>Enter Gallery</span>
          <span className="text-xl group-hover:translate-x-1.5 transition-transform">🔑</span>
        </motion.button>
        
        {/* Crayon box graphics placeholder */}
        <div className="flex gap-1.5 mt-4 items-center bg-[#FAF5E9]/90 py-1 px-3 border border-[#5a4b3d] rounded-full">
          <div className="w-3 h-3 rounded-full bg-rose-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <div className="w-3 h-3 rounded-full bg-sky-400"></div>
          <div className="font-crayon text-[10px] text-[#5a4b3d]">Priceless Capture Album</div>
        </div>
      </div>

    </div>
  );
};
