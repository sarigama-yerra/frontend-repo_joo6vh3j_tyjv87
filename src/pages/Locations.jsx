export default function Locations() {
  const areas = ['Kensington', 'Chelsea', 'Notting Hill', 'Holland Park', 'Paddington', 'Westminster', 'Greater London (Online)']
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-6">Locations We Serve</h1>
        <p className="text-slate-700 max-w-3xl">We offer in-person tutoring across West London and online sessions for families throughout Greater London. Our tutors know local schools and exam boards, offering targeted guidance for each borough.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {areas.map((a)=> (
            <div key={a} className="p-6 rounded-xl border border-slate-200">
              <h3 className="font-semibold text-[#0A2342]">{a}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl overflow-hidden border border-slate-200">
          <iframe
            title="Kensington Map"
            width="100%"
            height="420"
            loading="lazy"
            src="https://www.google.com/maps?q=Kensington%20London&output=embed"
          />
        </div>
      </div>
    </div>
  )
}
