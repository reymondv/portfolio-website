import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className='App sm:text-sm text-3xl'>
      <Header />
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
        ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
        Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id
        dui posuere blandit. Sed porttitor lectus nibh. Nulla quis lorem ut
        libero malesuada feugiat.
      </p>
      <Footer />
    </div>
  );
}

export default App;
