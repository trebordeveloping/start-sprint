
import React from 'react';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"

import Home from './pages/Home';
import Map from './pages/Map';
import Place from './pages/Place';

import { UserProvider } from './contexts/UserContext';

export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/:placeId" element={<Place />} />
    </React.Fragment>
  ))

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

