import Link from "next/link";

export default function LeftSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Left Sidebar
        </h2>
        <nav className="mt-4 space-y-2 text-sm text-slate-300">
          <Link href="/feed" className="block rounded-2xl px-3 py-2 hover:bg-white/10">
            Feed
          </Link>
          <Link href="/login" className="block rounded-2xl px-3 py-2 hover:bg-white/10">
            Login
          </Link>
          <Link href="/register" className="block rounded-2xl px-3 py-2 hover:bg-white/10">
            Register
          </Link>
        </nav>
      </div>
    </aside>
  );
}
