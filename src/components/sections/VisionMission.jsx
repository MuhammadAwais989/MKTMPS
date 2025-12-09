import React from 'react';
import schoolBook from '../../assets/images/6.png';
import labTube from '../../assets/images/7.png';
import IdeaBulb from '../../assets/images/8.png';
import Books from '../../assets/images/9.png';
import lamp from '../../assets/images/10.png';

export default function AboutSection() {
  const items = [
    {
      title: 'MISSION',
      text: 'We envision a future where every child in our community, regardless of poverty, becomes a confident, skilled, and compassionate leader, lighting the way for a brighter, more just Pakistan',
      icon: (
        <svg className="w-10 h-10 stroke-current text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18M7.5 3v4.5M16.5 3v4.5" />
          <rect x="3" y="7.5" width="18" height="12" rx="2" />
        </svg>
      ),
    },
    {
      title: 'VISION',
      text: "Our mission is to break the cycle of poverty by providing a quality education to poor children in Pakistan. We give them the knowledge, skills and moral foundation to build a better life for themselves and their community",
      icon: (
        <svg className="w-10 h-10 stroke-current text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75L6 3v15a.75.75 0 01-.75.75H6.75A.75.75 0 007.5 18V6.75a.75.75 0 01.75-.75H12z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75l6-3v15a.75.75 0 00.75.75H17.25A.75.75 0 0116.5 18V6.75a.75.75 0 00-.75-.75H12z" />
        </svg>
      ),
    },
    {
      title: 'Co-Curricular Activities',
      text: 'We develop well-rounded personalities through comprehensive co-curricular activities including Students Week, educational trips, literary events, writing contests, spelling competitions, language festivals, science exhibitions, and debate forums that complement academic learning.',
      icon: (
        <svg className="w-10 h-10 stroke-current text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <rect x="3" y="4" width="14" height="16" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h6M7 12h6M7 16h6" />
        </svg>
      ),
    },
    {
      title: 'Islamic Integration in Curriculum',
      text: 'We recognize Allah (SWT) as the ultimate source of all knowledge, where every academic discipline ultimately leads to the recognition of His divine unity. Our curriculum seamlessly integrates Islamic principles across all subjects, creating an educational environment that nurtures ethical character and spiritual development in every child.',
      icon: (
        <svg className="w-10 h-10 stroke-current text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
        </svg>
      ),
    },
    {
      title: 'Academic Excellence',
      text: 'We strive for academic distinction through innovative teaching methodologies, comprehensive assessment systems, and continuous professional development of our faculty to ensure students achieve their highest potential.',
      icon: (
        <svg className="w-10 h-10 stroke-current text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      title: 'Community Engagement',
      text: 'We foster strong community bonds through outreach programs, parent-teacher partnerships, and social initiatives that extend learning beyond classroom walls and contribute positively to society.',
      icon: (
        <svg className="w-10 h-10 stroke-current text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ];
  return (
    <section className="relative bg-white  pt-40 overflow-hidden -translate-y-14">
      {/* Background animated images */}
      <div className="absolute inset-0 z-0">
        {/* Position the images around the section */}
        <img 
          src={schoolBook} 
          alt="School Book" 
          className="absolute top-10 left-5 w-32 h-32 opacity-20 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src={labTube} 
          alt="Lab Tube" 
          className="absolute top-1/4 right-10 w-28 h-28 opacity-20 animate-float"
          style={{ animationDelay: '1s' }}
        />
        <img 
          src={IdeaBulb} 
          alt="Idea Bulb" 
          className="absolute bottom-20 left-10 w-36 h-36 opacity-20 animate-float"
          style={{ animationDelay: '2s' }}
        />
        <img 
          src={Books} 
          alt="Books" 
          className="absolute bottom-10 right-20 w-40 h-40 opacity-15 animate-float"
          style={{ animationDelay: '3s' }}
        />
        <img 
          src={lamp} 
          alt="Lamp" 
          className="absolute top-1/3 left-1/4 w-24 h-24 opacity-20 animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Add CSS for animation in your global CSS or style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-start gap-6">
              <div className="shrink-0">
                <div className="p-2 rounded-md bg-white shadow-sm border border-red-100">
                  {it.icon}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold uppercase tracking-wide text-slate-800 mb-3">{it.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl">{it.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 border-slate-100"></div>
      </div>
    </section>
  );
}