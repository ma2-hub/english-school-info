import Image, { type ImageProps } from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function AssetImage({ src, alt, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;

  return <Image src={resolvedSrc} alt={alt} {...props} />;
}
