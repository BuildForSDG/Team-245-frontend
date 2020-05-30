import LandingPage from '<pages>/LandingPage';
import ReportPage from '<pages>/LandingPage';

export const UnauthenticatedRoutes = {
  default: [
    {
      exact: true,
      path: '/',
      component: LandingPage
    },
    {
      exact: true,
      path: '/report',
      component: ReportPage
    }
  ]
};

export const AuthenticatedRoutes = {};
