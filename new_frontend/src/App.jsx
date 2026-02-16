import Footer from "../components/footer/footer";
import ShowCase1 from "./showcase1";
import NavBar from "../components/navbar-component/navbar";
import Services from "./services";
import ShowCase2 from "./showcase2";
import Error404 from "./error404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutProject from "../components/project-page-components/aboutProject";
import Products from "./products";
import About from "./about";
import Service from "./service";
import HomePage from "../components/home-page-components/homePage";
import Featured from "../components/featured-&-popluar-page-component/featrued";
import Popular from "../components/featured-&-popluar-page-component/popluar";
import Contact from "./contact";
import Results from "./results";

const router = createBrowserRouter([
  {
    path: "/foka",
    element: (
      <>
        <NavBar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/services",
    element: (
      <>
        <NavBar />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/search",
    element: (
      <>
        <NavBar navBar2={true} />
        <Results />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/services/:id",
    element: (
      <>
        <NavBar />
        <Service />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/showcases/showcase1",
    element: (
      <>
        <NavBar showCase1Page={true} />

        <ShowCase1 />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/showcases/showcase2",
    element: (
      <>
        <NavBar />
        <ShowCase2 />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/featured",
    element: (
      <>
        <NavBar />
        <Featured />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/popular",
    element: (
      <>
        <NavBar />
        <Popular />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/products/:id",
    element: (
      <>
        <NavBar navBar2={true} />
        <Products />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/projects/:id",
    element: (
      <>
        <NavBar />
        <AboutProject />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/about",
    element: (
      <>
        <NavBar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/foka/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
