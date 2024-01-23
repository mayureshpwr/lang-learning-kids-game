import React, { useState, createContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/home/Home';
import './App.css';
import Test from './components/test/Test';
import Score from './components/score/Score';
import Profile from './components/profile/Profile';
import Addquestion from './components/addquestion/Addquestion';

export const store = createContext();

function App() {

  const [logEamil, setLogEmail] = useState("");
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />

    },
    {
      path: "/test",
      element: <Test />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/score",
      element: <Score />
    }, {
      path: "/add",
      element: <Addquestion />
    }
  ])
  return (
    <store.Provider value={[logEamil, setLogEmail]} >
      <RouterProvider router={route}></RouterProvider>
    </store.Provider>
  );
}

export default App;
