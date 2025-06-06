
import React from 'react';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"

import Home from './pages/Home';
import Map from './pages/Map';

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
    </React.Fragment>
  ))

  return (
    <RouterProvider router={router} />
  )
}

