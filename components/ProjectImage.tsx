"use client";

import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  name: string;
};

export default function ProjectImage({ src, alt, name }: ProjectImageProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-[#F0F0F0]">
        <span className="font-sans text-[15px] text-muted">{name}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="aspect-[4/3] w-full object-cover"
      onError={() => setImgError(true)}
    />
  );
}
