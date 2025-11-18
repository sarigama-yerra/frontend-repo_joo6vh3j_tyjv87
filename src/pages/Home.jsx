import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A2342] text-white">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop)', backgroundSize:'cover', backgroundPosition:'center'}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Trusted private tutoring in Kensington & Chelsea</h1>
            <p className="mt-5 text-lg text-blue-100">Expert support in Maths, English, Science and exam preparation. Carefully matched tutors, measurable progress, and complete peace of mind for families.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/book" className="inline-flex items-center rounded-md bg-[#C5A572] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#b7955e]">Book a Consultation</Link>
              <Link to="/contact" className="inline-flex items-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title:'Outstanding Tutors', desc:'Experienced, DBS-checked educators with top academic backgrounds.'},
              {title:'Personalised Learning', desc:'One-to-one lessons tailored to each child’s goals and learning style.'},
              {title:'Results That Matter', desc:'Structured plans, regular feedback, and visible progress every term.'},
            ].map((b)=> (
              <div key={b.title} className="p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0A2342]">{b.title}</h3>
                <p className="mt-2 text-slate-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects preview */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="md:flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0A2342]">Subjects & Services</h2>
            <Link to="/subjects" className="text-[#0A2342] hover:underline">View all</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title:'Maths', desc:'Confidence-building from Primary to A Level.'},
              {title:'English', desc:'Reading, writing, and literature with clarity.'},
              {title:'Science', desc:'Biology, Chemistry, Physics made engaging.'},
            ].map((s)=> (
              <div key={s.title} className="p-6 rounded-xl bg-white border border-slate-200">
                <h3 className="font-semibold text-[#0A2342]">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-[#0A2342] mb-8">What families say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <div key={i} className="p-6 rounded-xl border border-slate-200">
                <div className="flex text-[#C5A572] mb-3">{'★★★★★'}</div>
                <p className="text-slate-700">“Professional from start to finish. Our daughter’s confidence in Maths has transformed.”</p>
                <p className="mt-3 text-sm text-slate-500">Parent, Kensington</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
