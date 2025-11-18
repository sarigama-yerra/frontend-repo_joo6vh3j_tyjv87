export default function About() {
  const tutors = [
    { name: 'Amelia R.', subject: 'English & 11+', bio: 'Former prep school teacher with 8+ years experience.', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' },
    { name: 'Thomas K.', subject: 'Maths (GCSE/A Level)', bio: 'Exams officer and examiner. Cambridge graduate.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Layla M.', subject: 'Science (Biology)', bio: 'Biomedical researcher and experienced tutor.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-6">About Kensington Tutors</h1>
        <p className="text-slate-700 max-w-3xl">We are a London-based tutoring service supporting families in Kensington & Chelsea and across Greater London online. Our mission is to unlock confidence, curiosity, and long-term achievement through expert, tailored teaching. We carefully match each student with the right tutor and provide clear plans, transparent communication, and safeguarding best practice.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {tutors.map((t)=> (
            <div key={t.name} className="rounded-xl overflow-hidden border border-slate-200">
              <img src={t.img} alt={t.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-[#0A2342]">{t.name}</h3>
                <p className="text-sm text-slate-600">{t.subject}</p>
                <p className="mt-2 text-slate-700 text-sm">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
