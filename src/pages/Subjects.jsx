export default function Subjects() {
  const items = [
    {
      title: 'Maths',
      desc: 'From number fluency to advanced problem solving. We emphasise conceptual understanding alongside exam technique.',
      approach: 'Diagnostic assessment, mastery tasks, and spiral practice ensure progress sticks.',
    },
    {
      title: 'English',
      desc: 'Reading comprehension, writing craft, and literature analysis tailored to curriculum goals.',
      approach: 'Close reading, structured planning, and vocabulary building underpin confident expression.',
    },
    {
      title: 'Science',
      desc: 'Biology, Chemistry, and Physics across all major exam boards.',
      approach: 'Hands-on explanations, visual models, and past-paper application build exam fluency.',
    },
    {
      title: '11 Plus Preparation',
      desc: 'Reasoning, Maths, and English preparation for London day schools and grammars.',
      approach: 'Targeted skill gaps, timed drills, and mock exams with detailed feedback.',
    },
    {
      title: 'GCSE Support',
      desc: 'Focused support for Years 10–11 with clear roadmaps to grades 7–9.',
      approach: 'Specification mapping, topic mastery, and examiner-style marking.',
    },
    {
      title: 'A Level Support',
      desc: 'Expert subject specialists to achieve A/A* outcomes.',
      approach: 'High-yield methods, precision marking, and exam technique refinement.',
    },
  ]

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-8">Subjects & Services</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-[#0A2342]">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.desc}</p>
              <p className="mt-3 text-sm text-slate-600"><span className="font-semibold text-[#0A2342]">Our approach:</span> {s.approach}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
