import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownCircle, Download, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Floating animation for profile
    const profileElement = profileRef.current;
    if (!profileElement) return;
    
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const translateY = Math.sin(elapsed / 1000) * 8;
      const rotation = Math.sin(elapsed / 2000) * 2;
      
      if (profileElement) {
        profileElement.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Particle animation background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse animate-delay-500"></div>
        
        {/* Additional particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className={`absolute rounded-full bg-primary/30 animate-pulse`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:order-1 order-2">
          <div className="space-y-2">
            <p className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary animate-fade-in">
              DevOps Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight animate-fade-in animate-delay-100">
              Mochamad Abdul <span className="text-primary">Rouf</span>
            </h1>
            <p className="text-lg text-muted-foreground text-balance animate-fade-in animate-delay-200">
              Fresh Graduate specializing in DevOps, cloud infrastructure, and automation for modern applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animate-delay-300">
            <button 
              onClick={scrollToExperience}
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium flex items-center gap-2 transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              View Experience
              <ArrowDownCircle size={18} />
            </button>
            
            <a 
              href="/mochamad-abdul-rouf-cv.pdf" 
              download
              className="px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary font-medium transition-all hover:bg-primary/10 flex items-center gap-2"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
          
          <div className="flex items-center gap-4 pt-4 animate-fade-in animate-delay-400">
            <a
              href="https://github.com/MochamadAbdulRouf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-[#171515] hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mochamad-abdul-rouf-b093333338" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-[#0077B5] hover:text-white transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/mochabdlrouf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="mailto:mochamadabdulrouf1@gmail.com" 
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://mochabdulrouf.blogspot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-[#FF5722] hover:text-white transition-all hover:scale-110"
              aria-label="Blogger"
            >
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.2,4.8H4.8C2.2,4.8,0,7,0,9.6v4.8C0,17,2.2,19.2,4.8,19.2h14.4c2.6,0,4.8-2.2,4.8-4.8V9.6C24,7,21.8,4.8,19.2,4.8z M14.4,12 c0,0.7-0.6,1.2-1.2,1.2H9.6c-0.7,0-1.2-0.6-1.2-1.2c0-0.7,0.6-1.2,1.2-1.2h3.6C13.8,10.8,14.4,11.3,14.4,12z M14.4,16.8 c0,0.7-0.6,1.2-1.2,1.2H9.6c-0.7,0-1.2-0.6-1.2-1.2c0-0.7,0.6-1.2,1.2-1.2h3.6C13.8,15.6,14.4,16.1,14.4,16.8z M14.4,7.2 c0,0.7-0.6,1.2-1.2,1.2H9.6c-0.7,0-1.2-0.6-1.2-1.2c0-0.7,0.6-1.2,1.2-1.2h3.6C13.8,6,14.4,6.6,14.4,7.2z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="md:order-2 order-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-fade-in">
            {/* Profile image with floating animation */}
            <div ref={profileRef} className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/lovable-uploads/a2810cf4-2333-45cd-ad74-d8e2ff212f04.png" 
                    alt="Mochamad Abdul Rouf" 
                    className="object-cover"
                  />
                  <AvatarFallback>MAR</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 glass-panel rounded-lg animate-fade-in animate-delay-500">
              <p className="text-sm font-medium">Fresh Graduate</p>
              <p className="text-xs text-muted-foreground">Cloud & Infrastructure</p>
            </div>
            <div className="absolute -top-6 -left-6 p-4 glass-panel rounded-lg animate-fade-in animate-delay-600">
              <p className="text-sm font-medium">DevOps Enthusiast</p>
              <p className="text-xs text-muted-foreground">CI/CD & Automation</p>
            </div>
            
            {/* Animated decorative elements */}
            <div className="absolute -z-10 w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
