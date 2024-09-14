import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import './App.css';

//importing Layout Components.
import ApplicationLayout from './LayoutComponents/ApplicationLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<ApplicationLayout/>}></Route>
  )
);

function App() {
 return(
  <RouterProvider router={router} />
 )
}

export default App;  
