import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import paths from "../paths";
import Event from "../pages/event/Event";
import CourseItem from "../components/CoursesItem/CourseItem";

//? LAYOUTS
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const AdminLayout = lazy(() => import("../layouts/AdminLayout"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));

const TestCompLazy = lazy(() => import("../pages/test"));

//? CLIENT PAGES
const HomePage = lazy(() => import("../pages/home"));
const LoginPage = lazy(() => import("../pages/auth/Login"));
const RegisterPage = lazy(() => import("../pages/auth/Register"));
const CourseListPage = lazy(() => import("../pages/courses"));
const CourseDetailPage = lazy(() => import("../pages/course-detail"));
const CourseVideoPage = lazy(() => import("../pages/course-video"));
const ProfilePage = lazy(() => import("../pages/profile"));

// ---
const CartPage = lazy(() => import("../pages/cart"));
const PaymentPage = lazy(() => import("../pages/payment"));
const AboutPage = lazy(() => import("../pages/about"));
const GalleryPage = lazy(() => import("../pages/gallery"));
const BlogPage = lazy(() => import("../pages/blog"));
const ContactPage = lazy(() => import("../pages/contact"));

//? ADMIN PAGES
const AdminPage = lazy(() => import("../pages/admin"));
const CourseManagerPage = lazy(() => import("../pages/admin/CourseManager"));
const CourseBoardPage = lazy(() => import("../pages/admin/CourseBoard"));
const UserManagerPage = lazy(() => import("../pages/admin/UserManager"));
const UserBoardPage = lazy(() => import("../pages/admin/UserBoard"));

const ErrorPage = lazy(() => import("../pages/error"));

/**
 * @description
 * User's authentication for login
 *
 * @returns
 * ...
 */
const AuthRouter = () => {
  // check if user has already login before
  let isAuthenticated = false;

  return isAuthenticated ? <Navigate to={paths.HOME} /> : <Outlet />;
};

/**
 * @description
 * User's authentication for:
 * 1. Add course to cart, visit cart, make payment
 * 2. Access to course video (if enrolled)
 *
 * @returns
 * ...
 */
const ClientRouter = () => {
  // check for user's authentication for mentioned priorities
  let isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to={paths.LOGIN} />;
};

/**
 * @description
 * User's authentication for accessing admin dashboard
 *
 * @returns
 * ...
 */
const AdminRouter = () => {
  // check for user's authentication for admin access
  let isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={"/401"} />;
};

const useRoutesElements = () => {
  const elements = useRoutes([
    {
      path: "",
      element: <AuthRouter />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: paths.LOGIN,
              index: true,
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <LoginPage />
                </Suspense>
              ),
            },
            {
              path: paths.REGISTER,
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <RegisterPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: <ClientRouter />,
      children: [
        {
          path: paths.PROFILE,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProfilePage />
            </Suspense>
          ),
        },
        {
          path: paths.CART,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CartPage />
            </Suspense>
          ),
        },
        {
          path: paths.PAYMENT,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <PaymentPage />
            </Suspense>
          ),
        },
        {
          path: `${paths.COURSES}/video/:courseId/:videoId`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CourseVideoPage />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: paths.ADMIN,
      element: <AdminRouter />,
      children: [
        {
          path: "",
          element: <AdminLayout />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminPage />
                </Suspense>
              ),
            },
            {
              path: "users",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <UserBoardPage />
                </Suspense>
              ),
            },
            {
              path: "courses",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <CourseBoardPage />
                </Suspense>
              ),
            },
            {
              path: "user-manager",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <UserManagerPage />
                </Suspense>
              ),
            },
            {
              path: "course-manager",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <CourseManagerPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: paths.HOME,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: `${paths.COURSES}`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <TestCompLazy />
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <CourseListPage />
                </Suspense>
              ),
            },
            {
              path: `detail/:courseId`,
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <CourseDetailPage />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: paths.ABOUT,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AboutPage />
            </Suspense>
          ),
        },
        {
          path: paths.BLOG,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <BlogPage />
            </Suspense>
          ),
        },
        {
          path: paths.GALLERY,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <GalleryPage />
            </Suspense>
          ),
        },
        {
          path: paths.CONTACT,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: paths.EVENT,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Event />
            </Suspense>
          ),
        },
        {
          path: `${paths.COURSES}/:courseCategory`,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <CourseItem />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "401",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorPage message={"401 Unauthorized!"} />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorPage message={"404 Not Found!!!"} />
        </Suspense>
      ),
    },
  ]);

  return elements;
};

export default useRoutesElements;
