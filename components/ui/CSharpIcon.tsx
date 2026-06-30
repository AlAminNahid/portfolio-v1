import Image from "next/image";

export default function CSharpIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/c-sharp.png"
      alt="C#"
      width={14}
      height={14}
      className={`grayscale brightness-[0.45] dark:brightness-[1.8] ${className ?? ""}`}
    />
  );
}
