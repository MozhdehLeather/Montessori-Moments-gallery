import React, { useState, useEffect } from "react";
import { MemoryImage } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, RefreshCw } from "lucide-react";

interface FeaturedMemoryProps {
  onSelect: (image: MemoryImage) => void;
}

export const FeaturedMemory: React.FC<FeaturedMemoryProps> = ({ onSelect }) => {
  const [memory, setMemory] = useState<MemoryImage | null>(null);
  const [loading, setLoading] = useState(false);
  const [spinKey, setSpinKey] = useState(0);

  const fetchRandomMemory = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/random");
      if (res.ok) {
        const data = await res.json();
        setMemory(data);
        setSpinKey(prev => prev + 1);
      }
    } catch (err) {
      console.error("Error fetching random memory:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMemory();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border-4 border-dashed border-[#5A5A5A]/20 rounded-3xl relative overflow-hidden pencil-shadow max-w-xl mx-auto my-6 text-center">
      
      {/* Small handwritten title on top */}
      <h3 className="font-crayon text-2xl md:text-3.5xl text-[#5A5A5A] font-bold mb-5 flex items-center justify-center gap-2">
        <span>Today's Memory</span>
      </h3>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-80 flex flex-col items-center justify-center text-center gap-2"
          >
            <div className="w-10 h-10 border-4 border-dashed border-crayon-blue rounded-full animate-spin"></div>
            <p className="font-crayon text-xs text-[#5A5A5A] opacity-70">Drawing happy memory...</p>
          </motion.div>
        ) : memory ? (
          <motion.div
            key={spinKey}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="w-full"
          >
            {/* Crayon Outer Frame Styling */}
            <div 
              className="relative group cursor-zoom-in w-full max-w-md mx-auto overflow-hidden bg-white p-4 rounded-3xl transition-transform hover:scale-[1.01]"
              style={{
                border: "8px solid #FFA7C4", // beautiful Crayon Pink border
                boxShadow: "0 0 0 4px #5A5A5A, 6px 6px 0px 0px rgba(90, 90, 90, 0.15)"
              }}
              onClick={() => onSelect(memory)}
            >
              <img
                src={memory.thumb}
                alt="Today's Memory"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover rounded-xl"
              />
              
              {/* Corner sticky tape simulation */}
              <div 
                className="absolute -top-1.5 -left-4 px-5 py-1 sticky-tape font-crayon text-[9px] text-[#5A5A5A]"
                style={{ transform: "rotate(-15deg)" }}
              >
                Today 💛
              </div>
              <div 
                className="absolute -bottom-1 -right-4 px-5 py-1 sticky-tape font-crayon text-[9px] text-[#5A5A5A]"
                style={{ transform: "rotate(-10deg)" }}
              >
                Snapshot
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="text-center py-12 font-crayon text-sm text-[#5A5A5A]">
            Could not retrieve memory drawing.
          </div>
        )}
      </AnimatePresence>

      {/* Mini clean swap button */}
      <motion.button
        onClick={fetchRandomMemory}
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-[#78B7FF] text-white hover:bg-[#68A7EF] font-fredoka text-xs font-semibold py-2 px-5 rounded-full border-2 border-[#5A5A5A] pencil-shadow flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
      >
        <RefreshCw className="w-3 h-3" />
        <span>Flip page for another leaf</span>
      </motion.button>
      
    </div>
  );
};

