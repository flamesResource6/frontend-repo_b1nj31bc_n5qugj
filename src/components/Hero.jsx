import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-cyan-200/80 text-xs mb-4">Creative Studio</p>
          <h1 className="text-4xl sm:text-6xl font-semibold text-white leading-tight">
            SARHANE Studio — digital design, 3D and web experiences
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl">
            We craft playful, modern interfaces and immersive visuals for brands that want to stand out. From strategy to ship.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-cyan-100 transition">View work</a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-transparent border border-white/30 text-white hover:border-white/60 transition">Start a project</a>
          </div>
        </div>
      </div>
    </section>
  )
}
