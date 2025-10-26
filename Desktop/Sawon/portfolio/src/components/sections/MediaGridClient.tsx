"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Gallery } from "@/lib/schemas";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Camera } from "lucide-react";

interface MediaGridClientProps {
  content: Gallery;
}

export function MediaGridClient({ content }: MediaGridClientProps) {
  const [index, setIndex] = useState(-1);

  const slides = content.mediaItems.map((item) => ({
    src: item.url,
    alt: item.title,
    title: item.title,
    description: item.description,
  }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.mediaItems.map((item, itemIndex) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group border-2 hover:border-primary transition-all shadow-card hover:shadow-xl"
            onClick={() => setIndex(itemIndex)}
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
              <div className="flex items-center gap-2 mb-2">
                <Camera className="w-4 h-4" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-sm text-white/90 line-clamp-2">{item.description}</p>
            </div>

            {/* Hover Effect Badge */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground shadow-lg">
                View
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </>
  );
}
