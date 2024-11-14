import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Routelayout from './layout/Routelayout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Routelayout />}>
                <Route index element={<Home />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="contact" element={<Contact />}></Route>
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    )
}

export default App