export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="w-10 h-10 rounded-full bg-[#0A2342] text-white flex items-center justify-center font-semibold mb-3">KT</div>
            <p className="text-slate-600">Premium private tutoring for families across Kensington & Chelsea and wider London.</p>
          </div>
          <div>
            <h4 className="font-semibold text-[#0A2342] mb-3">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="/about" className="hover:text-[#0A2342]">About</a></li>
              <li><a href="/pricing" className="hover:text-[#0A2342]">Pricing</a></li>
              <li><a href="/testimonials" className="hover:text-[#0A2342]">Testimonials</a></li>
              <li><a href="/privacy" className="hover:text-[#0A2342]">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0A2342] mb-3">Contact</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Email: hello@kensingtontutors.co.uk</li>
              <li>Phone: 020 0000 0000</li>
              <li>Address: Kensington, London W8</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0A2342] mb-3">Follow</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">IG</a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">in</a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200">f</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Kensington Tutors. All rights reserved.</div>
      </div>
    </footer>
  )
}
