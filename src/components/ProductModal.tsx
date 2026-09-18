"use client";

import { Product } from "@/types/product";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <AnimatePresence mode="wait">
      {product && (
        <motion.div
          key={product.id}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
           className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl transform-gpu will-change-transform"

            initial={{
              opacity: 0,
              scale: 0.82,
              y: 32,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.9,
              y: 16,
            }}

            transition={{
              type: "spring",
              stiffness: 320,
              damping: 28,
              mass: 0.7,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold">{product.title}</h2>

              <button
                onClick={onClose}
                className="ml-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <motion.div 
              className="mt-6 flex justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.3 }}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={224}
                className="max-h-56 w-auto object-contain"
              />
            </motion.div>

            <motion.p
              className="mt-5 text-sm leading-relaxed text-slate-600"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              {product.description}
            </motion.p>

            <motion.div
              className="mt-5 flex items-center justify-between"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {product.category}
              </span>

              <span className="text-lg font-semibold">
                ${product.price}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}