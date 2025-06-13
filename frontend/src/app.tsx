// @ts-ignore
import './app.css';
import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import HomePage from './pages/index';
import TasksPage from './pages/tasks/index';
import LoginPage from './pages/login/index';
import RegisterPage from './pages/register/index';

const rootRoute = createRootRoute({});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const tasksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tasks',
  component: TasksPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterPage,
});
const routeTree = rootRoute.addChildren([indexRoute, tasksRoute, loginRoute, registerRoute]);

const router = createRouter({
  routeTree,
});

export function App() {
  return <RouterProvider router={router} />;
}
