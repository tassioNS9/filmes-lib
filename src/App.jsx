
import './App.css'
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {


    return (
        <>
        <Navbar/>
            <Home/>
            <Outlet/>
        </>
    )

}

export default App;
