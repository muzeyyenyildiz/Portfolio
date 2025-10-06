import NavBar from './components/Navbar';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import SkillsSection from './components/Skills';
import ExperienceSection from './components/Experience';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import { CONTENT } from './components/constantsTR';
import { LanguageKey, UILanguage } from "./components/types"
import { useState } from 'react';


const App = () => {



  const [lang, setLang] = useState<LanguageKey>('en');

  // 3. Erişim artık güvenli ve hatasızdır
  const currentContent = CONTENT[lang];
  const texts: UILanguage = currentContent.ui;
  const { name, profession, summary, contact, skills, experience, projects, education } = currentContent;

  // Dili değiştiren fonksiyon
  const toggleLang = () => {
    setLang(prevLang => prevLang === 'en' ? 'tr' : 'en');
  };
  return (
    <div className='container'>
      <NavBar texts={texts} toggleLang={toggleLang} lang={lang} content={currentContent} />
      <main style={{ marginTop: '56px' }} className='container-fluid mx-auto mt-[56px]'>
        <HeroSection content={currentContent} />
        <AboutSection content={currentContent} texts={texts} />
        <SkillsSection content={currentContent} texts={texts} />
        <ExperienceSection content={currentContent} texts={texts} />
        <ProjectsSection content={currentContent} texts={texts} />
        <ContactSection content={currentContent} texts={texts} />
      </main>
      <Footer content={currentContent} />
    </div>
  );
}

export default App;