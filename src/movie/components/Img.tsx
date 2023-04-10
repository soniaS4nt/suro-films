import Image, { ImageProps } from "next/image";
import { URL_IMG } from "@/movie/api";

interface ImgProps extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Img({ src, alt, width, height, className }: ImgProps) {
  return (
    <Image
      unoptimized
      className={className}
      src={`${URL_IMG}${src}`}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}
