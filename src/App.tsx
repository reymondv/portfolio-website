import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About, Experience, Projects, Contact } from './components/Sections';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className=''>
        <section
          id='about'
          className='md:h-screen md:w-screen h-full p-12 md:pt-0 max-w-2xl md:max-w-6xl m-auto flex flex-col'>
          <About />
        </section>
        <section
          id='experience'
          className='md:h-screen md:w-screen h-full p-12 md:py-0 max-w-2xl md:max-w-6xl m-auto'>
          <Experience />
        </section>
        <section
          id='project'
          className='md:h-screen md:w-screen h-full p-12 md:py-0 max-w-2xl md:max-w-6xl m-auto'></section>
        <section
          id='contact'
          className='md:h-screen md:w-screen h-full p-12 md:py-0 max-w-2xl md:max-w-6xl m-auto'></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
