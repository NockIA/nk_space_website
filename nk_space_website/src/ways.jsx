import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Destination } from './templates/jsx/destination';
import { Home } from './templates/jsx/home';
import { Crew } from './templates/jsx/crew';
import { Technology } from './templates/jsx/technology';

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Destination' element={<Destination />} />
          <Route path='/Crew' element={<Crew />} />
          <Route path='/Technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
