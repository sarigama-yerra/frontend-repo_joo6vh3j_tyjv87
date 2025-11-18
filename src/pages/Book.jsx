import { useState } from 'react'

export default function Book() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      setStatus('Sending...')
      const res = await fetch(`${baseUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setStatus('Thank you — we will be in touch shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Sorry, something went wrong: ${err.message}`)
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#0A2342] mb-6">Book a Session or Consultation</h1>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
          <input name="name" required placeholder="Your name" className="border border-slate-300 rounded-md px-3 py-2" />
          <input type="email" name="email" required placeholder="Email" className="border border-slate-300 rounded-md px-3 py-2" />
          <input name="phone" placeholder="Phone" className="border border-slate-300 rounded-md px-3 py-2" />
          <input name="child_year_group" placeholder="Child’s year group" className="border border-slate-300 rounded-md px-3 py-2" />
          <input name="subject" required placeholder="Subject" className="border border-slate-300 rounded-md px-3 py-2" />
          <select name="format" className="border border-slate-300 rounded-md px-3 py-2">
            <option>In Person</option>
            <option>Online</option>
          </select>
          <input name="postcode" placeholder="Postcode (for in person)" className="border border-slate-300 rounded-md px-3 py-2" />
          <textarea name="availability" placeholder="Availability (days/times)" className="border border-slate-300 rounded-md px-3 py-2" />
          <textarea name="notes" placeholder="Any notes" className="border border-slate-300 rounded-md px-3 py-2" />
          <button className="mt-2 inline-flex items-center justify-center rounded-md bg-[#0A2342] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0c2b57]">Submit</button>
        </form>
        {status && <p className="mt-4 text-sm text-slate-700">{status}</p>}
      </div>
    </div>
  )
}
