export default function Testimonials() {
  const items = [
    { q: 'Our son went from a 5 to an 8 in GCSE Maths.', who: 'Parent, Chelsea' },
    { q: 'The 11+ prep was structured and reassuring. We felt supported at every step.', who: 'Parent, Notting Hill' },
    { q: 'Clear explanations and weekly updates made a huge difference.', who: 'Student, Westminster' },
  ]
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-8">Testimonials</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx)=> (
            <div key={idx} className="p-6 rounded-xl border border-slate-200">
              <div className="text-[#C5A572] mb-3">{'★★★★★'}</div>
              <p className="text-slate-700">“{t.q}”</p>
              <p className="mt-3 text-sm text-slate-500">{t.who}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
