import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
          <Route path="/products" element={<div className="p-8 text-center">Trang sản phẩm đang xây dựng...</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div className="p-8 text-center">Liên hệ đang xây dựng...</div>} />
          <Route path="/cart" element={<div className="p-8 text-center">Giỏ hàng đang xây dựng...</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
