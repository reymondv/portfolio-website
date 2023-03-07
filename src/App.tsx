import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About, Experinece, Projects, Contact } from './components/Sections';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className=''>
        <div id='about' className='h-screen w-screen border-b border-white'>
          <About />
        </div>
        <div
          id='experience'
          className='h-screen w-screen border-b border-white'></div>
        <div
          id='project'
          className='h-screen w-screen border-b border-white'></div>
        <div
          id='contact'
          className='h-screen w-screen border-b border-white'></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
