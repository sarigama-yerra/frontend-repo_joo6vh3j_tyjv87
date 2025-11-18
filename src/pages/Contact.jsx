import { useState } from 'react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      setStatus('Sending...')
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setStatus('Thank you — we will reply shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Sorry, something went wrong: ${err.message}`)
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-6">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="space-y-3 order-2 md:order-1">
            <input name="name" required placeholder="Your name" className="w-full border border-slate-300 rounded-md px-3 py-2" />
            <input type="email" name="email" required placeholder="Email" className="w-full border border-slate-300 rounded-md px-3 py-2" />
            <textarea name="message" required placeholder="How can we help?" className="w-full border border-slate-300 rounded-md px-3 py-2 h-32" />
            <button className="inline-flex items-center justify-center rounded-md bg-[#0A2342] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c2b57]">Send message</button>
            {status && <p className="text-sm text-slate-700">{status}</p>}
          </form>
          <div className="order-1 md:order-2">
            <p className="text-slate-700">Email: hello@kensingtontutors.co.uk</p>
            <p className="text-slate-700 mt-1">Phone: 020 0000 0000</p>
            <p className="text-slate-700 mt-1">Address: Kensington, London W8</p>
            <div className="rounded-xl overflow-hidden border border-slate-200 mt-6">
              <iframe title="Map" width="100%" height="360" loading="lazy" src="https://www.google.com/maps?q=Kensington%20London&output=embed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
