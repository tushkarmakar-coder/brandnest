export default function TrustBar() {
  const brands = ['Google', 'Meta', 'Amazon', 'Startup India', 'Microsoft', 'HubSpot', 'Shopify', 'Zapier']

  return (
    <section className="bg-[#111111] border-y border-[rgba(255,92,0,0.1)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] tracking-[0.14em] uppercase text-[rgba(245,245,245,0.4)] mb-8 font-medium">Trusted by brands & agencies using</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
          {brands.map((brand) => (
            <div key={brand} className="text-[13px] text-[rgba(245,245,245,0.5)] font-medium opacity-60 hover:opacity-100 transition-opacity">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
