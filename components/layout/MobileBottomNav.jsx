import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-2xl items-center justify-between text-xs text-slate-300">
        <Link href="/feed" className="rounded-full px-3 py-2 hover:bg-white/10">
          Feed
        </Link>
        <Link href="/login" className="rounded-full px-3 py-2 hover:bg-white/10">
          Login
        </Link>
        <Link href="/register" className="rounded-full px-3 py-2 hover:bg-white/10">
          Register
        </Link>
      </div>
    </nav>
  );
}
