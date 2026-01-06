
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
          <span className="text-accent">ANTI</span>GRAVITY
        </h1>
        <p className="text-lg sm:text-xl text-accent-dim max-w-2xl">
          Industrial Grade Visualization System.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <button className="px-6 py-3 rounded-full bg-accent text-background font-bold hover:bg-accent-dim hover:text-white transition-colors">
            Initialize System
          </button>
          <button className="px-6 py-3 rounded-full border border-accent-dim text-accent-dim hover:bg-accent-dim/10 transition-colors">
            View Documentation
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-xs text-stone-500">
        <p>SYSTEM READY</p>
      </footer>
    </div>
  );
}
