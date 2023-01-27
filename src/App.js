import {
  createBrowserRouter,
  Route, 
  NavLink, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

//pages
import { About, Home } from "./pages";

// layouts
import { RootLayout } from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App
