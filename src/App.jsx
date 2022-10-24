import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './components/Customers';
import Home from './components/Home';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
