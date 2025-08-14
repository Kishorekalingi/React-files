import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Mycomponent from './MyComponent.jsx'
import FunctionComponent from './FunctionComponent.jsx'
import Cube  from './Cube.jsx';
// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Mycomponent /> */}
    {/* <FunctionComponent /> */}
    <Cube/>
  </StrictMode>,
)
