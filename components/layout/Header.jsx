import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/feed" className="text-lg font-semibold tracking-tight">
          My App
        </Link>
        <div className="text-sm text-slate-400">Header</div>
      </div>
    </header>
  );
}
