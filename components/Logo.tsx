import Image from "next/image";

export default function Logo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo.png" alt="GDG logo" width={size} height={size}
      className={`object-contain ${className}`} priority
    />
  );
}