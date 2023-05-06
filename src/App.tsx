import Footer from './components/layout/Footer';
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import './App.css'

function App() {
  return (
    <div className="wrapper">
      <header>
        <Navbar />
      </header>
      <main>
        <Form />
      </main>
        <Footer />
    </div>
  );
}

export default App;