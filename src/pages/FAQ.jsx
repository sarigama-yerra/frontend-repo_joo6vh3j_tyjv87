export default function FAQ() {
  const faqs = [
    { q: 'How does tutoring work?', a: 'We begin with a short consultation to understand goals. We then match your child with a vetted tutor and create a plan with measurable milestones.' },
    { q: 'Online vs in person?', a: 'Both are effective. In person is available across West London, while online offers maximum flexibility with the same quality teaching.' },
    { q: 'Cancellation policy', a: 'We operate a 24-hour cancellation policy. Sessions cancelled within 24 hours may be charged in full.' },
    { q: 'Safeguarding', a: 'All tutors are DBS-checked and follow our safeguarding policy. Online sessions use secure platforms and are supervised as needed.' },
    { q: 'How is progress tracked?', a: 'You will receive regular updates and termly reports. We review goals with you and adjust the plan to ensure continuous progress.' },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-8">Frequently Asked Questions</h1>
        <div className="divide-y divide-slate-200 border rounded-xl">
          {faqs.map((f, idx)=> (
            <div key={idx} className="p-6">
              <h3 className="font-semibold text-[#0A2342]">{f.q}</h3>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
