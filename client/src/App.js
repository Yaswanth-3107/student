import { Route, Routes } from 'react-router-dom';
import "./styles.css"
import { Data } from './Data';
import { Home } from './Home';
import { Datas } from './checkout';
import { Preci } from './prechecin';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/data" element={<Data />} />
      <Route exact path="/checkout" element={<Datas />} />
      <Route exact path="/presentcheckin" element={<Preci />} />
    </Routes>
  );
}

export default App;
