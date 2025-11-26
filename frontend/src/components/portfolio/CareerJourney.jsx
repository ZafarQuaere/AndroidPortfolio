import React from 'react';

const CareerJourney = () => {
  return (
    <section id="career-journey" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Career Journey Summary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-8" />
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A decade of professional growth and technical leadership in Android development
            </p>
          </div>

          {/* Career Summary */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl p-8 border border-emerald-500/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-4 uppercase">Career Progression</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Junior Developer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2015-2016</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Mid-level Developer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2016-2017</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-300 font-medium">Lead Engineer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2017-2021</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-300 font-medium">Associate Staff Engineer</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wide">2021-Present</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-emerald-400 mb-4 uppercase">Key Achievements</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Led multiple high-impact Android projects</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Mentored 15+ junior developers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Published 6+ successful mobile applications</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2" />
                    <span className="text-slate-300">Established architecture best practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
