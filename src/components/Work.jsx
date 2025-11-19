import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Brand launch site',
    tags: ['Web', '3D', 'Motion'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Immersive 3D product',
    tags: ['3D', 'Interactive'],
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-commerce refresh',
    tags: ['Web', 'UX', 'Brand'],
    image: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-4xl font-semibold text-white">Selected Work</h2>
          <a href="#contact" className="text-cyan-200 hover:text-white">See all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-widest text-cyan-200/80 bg-cyan-400/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-medium">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
