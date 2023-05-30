import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './templates/jsx/home';

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
