export default function TrustBar() {
  return (
    <section className="bg-[#111111] border-y border-[rgba(255,92,0,0.1)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-1">50+</span>
          <span className="text-[10px] tracking-[0.14em] uppercase text-[rgba(245,245,245,0.4)] font-medium">Projects Delivered</span>
        </div>
        <div className="hidden md:block h-8 w-[1px] bg-[rgba(255,92,0,0.2)]"></div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-1">6</span>
          <span className="text-[10px] tracking-[0.14em] uppercase text-[rgba(245,245,245,0.4)] font-medium">Industries Served</span>
        </div>
        <div className="hidden md:block h-8 w-[1px] bg-[rgba(255,92,0,0.2)]"></div>
        <div className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-1">₹25K–₹2L</span>
          <span className="text-[10px] tracking-[0.14em] uppercase text-[rgba(245,245,245,0.4)] font-medium">Project Budgets</span>
        </div>
      </div>
    </section>
  )
}

