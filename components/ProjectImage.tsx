import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

function isLocalAsset(src: string) {
  return src.startsWith("/");
}

function isSvg(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

export function ProjectImage({
  src,
  alt,
  priority,
  className = "h-full w-full object-cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px",
}: Props) {
  if (isLocalAsset(src) && isSvg(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- Next/Image blocks local SVG by default
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={className}
      />
    );
  }

  if (isLocalAsset(src)) {
    return (
      <Image
        src={src}
        alt={alt}
        width={640}
        height={400}
        priority={priority}
        className={className}
        sizes={sizes}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- arbitrary external screenshots
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}
