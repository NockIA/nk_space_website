import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Destination } from './templates/jsx/destination';
import { Home } from './templates/jsx/home';
import { Crew } from './templates/jsx/crew';

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Destination' element={<Destination />} />
          <Route path='/Crew' element={<Crew />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
