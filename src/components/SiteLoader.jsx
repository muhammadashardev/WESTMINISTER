import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

export default function SiteLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#F6F0FD]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      aria-label="Loading Westminster Kennel Club"
      role="status"
    >
      <div className="loader-glow loader-glow-one" />
      <div className="loader-glow loader-glow-two" />
      <PawPrint className="loader-background-paw loader-background-paw-one" aria-hidden="true" />
      <PawPrint className="loader-background-paw loader-background-paw-two" aria-hidden="true" />
      <PawPrint className="loader-background-paw loader-background-paw-three" aria-hidden="true" />
      <div className="loader-wave" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
          <div className="loader-progress-track" />
          <div className="loader-ring loader-ring-outer" />
          <span className="loader-orbit-dot" />

          <div className="relative z-10 flex h-[154px] w-[154px] items-center justify-center rounded-full border border-white/90 bg-white/55 shadow-[0_12px_30px_rgba(59,7,100,0.12)] backdrop-blur-sm sm:h-[178px] sm:w-[178px]">
            <PawPrint className="h-20 w-20 fill-[#3B0764] text-[#3B0764] drop-shadow-md sm:h-24 sm:w-24" aria-hidden="true" />
          </div>
        </div>

        <p className="mt-8 text-center text-[20px] font-black tracking-[0.16em] text-[#2E0854] uppercase sm:text-2xl">
          Westminster Champions
        </p>
        <span className="mt-3 text-sm font-semibold text-purple-800/80 sm:text-base">Loading Champions...</span>
        <div className="mt-5 flex gap-3" aria-hidden="true">
          <i className="loader-dot" /><i className="loader-dot" /><i className="loader-dot" />
        </div>
      </div>
    </motion.div>
  );
}
