export default function RightSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-3xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Right Sidebar
        </h2>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          Put suggestions, trends, or profile widgets here.
        </p>
      </div>
    </aside>
  );
}
