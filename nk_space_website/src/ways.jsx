import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Destination } from './templates/jsx/destination';

function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
