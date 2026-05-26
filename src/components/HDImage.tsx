"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect, useMemo } from "react";

interface HDImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

function normalizeSrc(src: string | object): string {
  if (typeof src !== "string") return "";
  let base = src;
  if (base.includes("#")) {
    base = base.split("#")[0];
  }
  if (base.includes("unsplash.com")) {
    return `${base.split("?")[0]}?auto=format&fit=crop&w=1200&q=85`;
  }
  if (base.includes("pexels.com")) {
    return `${base.split("?")[0]}?auto=compress&cs=tinysrgb&w=1200&q=85`;
  }
  return base;
}

export default function HDImage({ 
  src, 
  alt, 
  fallbackSrc = "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
  className = "",
  ...props 
}: HDImageProps) {
  // Derive the normalized src from the prop
  const normalizedSrc = useMemo(() => normalizeSrc(src as string | object), [src]);
  
  // Extract custom object position from #pos= hash
  const objectPosition = useMemo(() => {
    if (typeof src === 'string') {
      const match = src.match(/#pos=([^&]+)/);
      if (match) return decodeURIComponent(match[1]).replace(/-/g, ' ');
    }
    return "center";
  }, [src]);

  const [imgSrc, setImgSrc] = useState<string>(normalizedSrc || fallbackSrc);
  const [loading, setLoading] = useState(true);

  // When the src prop changes
  useEffect(() => {
    const next = normalizeSrc(src as string | object);
    setImgSrc(next || fallbackSrc);
    setLoading(true);
  }, [src, fallbackSrc]);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-100 ${loading ? "animate-pulse" : ""}`}>
      <Image
        {...props}
        src={imgSrc}
        alt={alt || "Tanzania landscape"}
        className={`object-cover transition-all duration-700 ease-in-out ${
          loading ? "scale-105 blur-sm" : "scale-100 blur-0"
        } ${className}`}
        style={{ objectPosition, ...props.style }}
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
