import Admin from "./pages/Admin"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Project from "./pages/Project"
import { ADMIN_ROUTE, BLOG_ROUTE, CONTACT_ROUTE, HOME_ROUTE, PROJECT_ROUTE } from "./utils/consts"

export const privateRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin/>,
  }
]

export const publicRoutes = [
  {
    path: BLOG_ROUTE,
    Component: <Blog/>,
  },
  {
    path: CONTACT_ROUTE,
    Component: <Contact/>,
  },
  {
    path: HOME_ROUTE,
    Component: <Home/>,
  },
  {
    path: PROJECT_ROUTE + '/:id',
    Component: <Project/>,
  },
];