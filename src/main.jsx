import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App.jsx'
import TodoContainer from './components/TodoContainer.jsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/home",
    element: <App />,    
  },{
    path: "/list",
    element: <TodoContainer />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
