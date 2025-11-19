export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-semibold mb-4">Studio focus</h2>
            <p className="text-slate-300">
              We are a design-led studio blending brand, product and technology. We partner with founders and teams to build
              distinct identities and interactive experiences that people love to use.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-cyan-200 text-sm mb-1">Specialties</p>
                <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                  <li>Web design & development</li>
                  <li>3D & motion</li>
                  <li>Brand systems</li>
                </ul>
              </div>
              <div>
                <p className="text-cyan-200 text-sm mb-1">Tools</p>
                <ul className="text-slate-300 text-sm space-y-1 list-disc list-inside">
                  <li>Figma, Blender</li>
                  <li>Spline, After Effects</li>
                  <li>React, Three.js</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300 leading-relaxed">
              Our process is collaborative and transparent. We start with a discovery sprint, define success metrics, and move
              quickly to prototypes. Expect frequent check-ins, clear milestones and a beautiful final result.
            </p>
            <div className="mt-6 grid grid-cols-3 text-center">
              <div className="p-4">
                <p className="text-3xl font-semibold text-white">30+</p>
                <p className="text-xs text-slate-400">Projects</p>
              </div>
              <div className="p-4 border-x border-white/10">
                <p className="text-3xl font-semibold text-white">10</p>
                <p className="text-xs text-slate-400">Years</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-semibold text-white">5*</p>
                <p className="text-xs text-slate-400">Ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
