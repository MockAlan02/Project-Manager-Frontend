

import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import LoginPage from './Routes/LoginPage';
import About from './Routes/About';
import Register from './Routes/Register';
import AdminPage from './Routes/AdminPage';
import React from 'react';
import Menu from './components/Menu';
import MenuAdmin from './components/MenuAdmin';
import Tarea from './Routes/TareasPage';
import TaskList from './Routes/TaskList';


const MenuWrapper: React.FC<{ element: React.ReactNode }> = ({ element }) => (
  <>
    <Menu />
    {element}
  </>
);

const MenuAdminWrapper: React.FC<{ element: React.ReactNode }> = ({ element }) => (
  <>
  <MenuAdmin/>
  {element}
  </>
);

const App = createBrowserRouter([
  {
    path: "/",
    element: <MenuWrapper element = {<HomePage/>}/>,
  },
  {
    path: "/about",
    element: <MenuWrapper element ={<About/>}/>,
  },
  { 
    path: "/register",
    element: <MenuWrapper element = {<Register />}/>,
  }
  ,
  {
    path: "/Login",
    element: <MenuWrapper element= {<LoginPage/>} />,
  },
  {
    path:"/dashboard",
    element: <MenuAdminWrapper element={<AdminPage/>}/>
  },
  {
    path:"/dashboard/:id",
    element: <MenuAdminWrapper element={<Tarea/>}/>
  }, 
  {
    path: "/TaskList",
    element: <MenuAdminWrapper element={<TaskList/>}/>,
  }
]);



export default App
