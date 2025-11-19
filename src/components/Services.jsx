export default function Services() {
  const services = [
    { title: 'Websites & Apps', desc: 'Modern, performant and accessible frontends built with React.' },
    { title: '3D & Motion', desc: 'Spline, Blender and WebGL to bring products to life.' },
    { title: 'Brand & Visuals', desc: 'Distinct identities, design systems and launch assets.' },
  ]
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.12),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium mb-2">{s.title}</h3>
              <p className="text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
