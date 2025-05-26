import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ResumeViewer from './components/ResumeViewer';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="resumeviewer"><ResumeViewer /></section>
        <section id="contactme"><ContactMe /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
