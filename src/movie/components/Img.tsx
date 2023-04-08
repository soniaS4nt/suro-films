import Image from "next/image";

export default function Img({ src, alt, width, height, ...props }) {
  return (
    <Image
      unoptimized
      {...props}
      src={`https://image.tmdb.org/t/p/original${src}`}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}
