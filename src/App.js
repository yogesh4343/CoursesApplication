
import './App.css';
import './index.css';
import Courses from './Pages/Courses';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import SinglePage from './Pages/SinglePage';
import SearchPage from './Pages/SearchPage';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="singlepage/:id" element={<SinglePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
