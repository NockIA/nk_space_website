import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Destination } from './templates/jsx/destination';
import { Home } from './templates/jsx/home';

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Destination' element={<Destination />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
