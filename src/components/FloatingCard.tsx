import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  position: string;
  delay?: number;
}

export default function FloatingCard({
  icon: Icon,
  title,
  value,
  position,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -12, 0],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
      }}
      className={`
        absolute
        ${position}
        bg-white/90
        backdrop-blur-lg
        shadow-2xl
        rounded-3xl
        px-6
        py-5
        border
        border-white/60
        z-20
      `}
    >
      <div className="flex items-center gap-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Icon
            size={24}
            className="text-blue-600"
          />
        </div>

        <div>
          <p className="text-sm text-gray-400">
            {title}
          </p>

          <h3 className="font-bold text-xl text-slate-800">
            {value}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}