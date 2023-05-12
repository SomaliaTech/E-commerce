
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import { Products } from './components/shooping/Products';
import Product from './components/product/Product';

const Layout = ()=>{
  return(
    <div className='link'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/product/:id',
        element: <Product/>
  
      },
      {
        path: '/products/',
        element: <Products/>
  
      },
      {
        path: '/products/:id',
        element: <Products />
      }
    ]
   }
   
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
