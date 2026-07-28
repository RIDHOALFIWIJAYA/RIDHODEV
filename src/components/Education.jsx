import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { FadeIn } from './Reveal';

const Education = () => {
  // Data dummy riwayat pendidikan - silakan ubah sesuai data kam
  const educationData = [
    {
      institution: 'Universitas Teknologi Berlin',
      degree: 'SoftWare Engineering',
      period: '2029 - Sekarang',
      location: 'Berlin, German',
      description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      achievements: [
        'Bug hunter spesialist',
        'Top 1 Hackton',
        'Web dev certified'
      ]
    },
    {
      institution: 'SMKN1 L.PAKAN',
      degree: 'Jurusan RPL',
      period: '2026 - 2029',
      location: 'Lubuk pakam, Indonesia',
      description: 'Saya menempuh pendidikan di SMK dengan sangat baik',
      achievements: [
        'Juara1 LKS',
        'Juara1 Web Developer',
        'Juara 1 Web Design'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-blue-600 dark:text-blue-400 font-black tracking-widest uppercase text-xs mb-3">
              Academic Background
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Riwayat Pendidikan
            </h3>
            <div className="mt-4 w-24 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
          </FadeIn>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {educationData.map((edu, index) => (
            <FadeIn key={index} delay={0.2 * index} direction={index % 2 === 0 ? "right" : "left"}>
              <div className="group relative bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-[3rem] border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.12)] hover:-translate-y-2 flex flex-col justify-between h-full">
                
                <div>
                  {/* Top Header Card */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-100 dark:border-blue-800 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <span className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-black flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Title & Degree */}
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                    {edu.institution}
                  </h4>
                  <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {edu.degree}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-6 font-medium">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
                    {edu.description}
                  </p>
                </div>

                {/* Highlights / Achievements List */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-500" />
                      Sorotan & Pencapaian
                    </p>
                    <ul className="space-y-2">
                      {edu.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                          <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;