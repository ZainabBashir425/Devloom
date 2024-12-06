import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import {Layout} from './components'
import {Home, Portfolio,Blog,BlogDetail, Contact} from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blogdetail" element={<BlogDetail />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

