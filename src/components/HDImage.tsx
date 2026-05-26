"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect, useMemo } from "react";

interface HDImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

function normalizeSrc(src: string | object): string {
  if (typeof src !== "string") return "";
  if (src.includes("unsplash.com")) {
    return `${src.split("?")[0]}?auto=format&fit=crop&w=1200&q=85`;
  }
  if (src.includes("pexels.com")) {
    return `${src.split("?")[0]}?auto=compress&cs=tinysrgb&w=1200&q=85`;
  }
  return src;
}

export default function HDImage({ 
  src, 
  alt, 
  fallbackSrc = "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
  className = "",
  ...props 
}: HDImageProps) {
  // Derive the normalized src from the prop — always tracks prop changes
  const normalizedSrc = useMemo(() => normalizeSrc(src as string | object), [src]);

  const [imgSrc, setImgSrc] = useState<string>(normalizedSrc || fallbackSrc);
  const [loading, setLoading] = useState(true);

  // When the src prop changes (e.g. calendar month switch), update internal state
  useEffect(() => {
    const next = normalizeSrc(src as string | object);
    setImgSrc(next || fallbackSrc);
    setLoading(true); // Reset loading shimmer for new image
  }, [src, fallbackSrc]);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-100 ${loading ? "animate-pulse" : ""}`}>
      <Image
        {...props}
        src={imgSrc}
        alt={alt || "Tanzania landscape"}
        className={`object-cover object-center transition-all duration-700 ease-in-out ${
          loading ? "scale-105 blur-sm" : "scale-100 blur-0"
        } ${className}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          console.warn(`[HDImage] Failed loading image: ${src}. Falling back to default.`);
          setImgSrc(fallbackSrc);
          setLoading(false);
        }}
      />
    </div>
  );
}
