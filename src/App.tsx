import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Collection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;