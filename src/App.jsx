import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApiData from './pages/ApiData';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Navbar />
          
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/api-data" element={<ApiData />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;