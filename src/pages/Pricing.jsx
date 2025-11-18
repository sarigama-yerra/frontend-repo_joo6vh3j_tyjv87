export default function Pricing() {
  const tiers = [
    { level: 'Primary', inPerson: '£70/hr', online: '£60/hr' },
    { level: '11 Plus', inPerson: '£80/hr', online: '£70/hr' },
    { level: 'GCSE', inPerson: '£85/hr', online: '£75/hr' },
    { level: 'A Level', inPerson: '£95/hr', online: '£85/hr' },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-8">Pricing</h1>
        <div className="grid md:grid-cols-4 gap-6">
          {tiers.map((t)=> (
            <div key={t.level} className="p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-[#0A2342]">{t.level}</h3>
              <div className="mt-4 flex justify-between text-slate-700">
                <span>In Person</span><span className="font-semibold">{t.inPerson}</span>
              </div>
              <div className="mt-2 flex justify-between text-slate-700">
                <span>Online</span><span className="font-semibold">{t.online}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">Prices include planning and materials. Block bookings and sibling discounts available.</p>
      </div>
    </div>
  )
}
