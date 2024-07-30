import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Progress from './components/Progress';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Progress/>} path='/'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
