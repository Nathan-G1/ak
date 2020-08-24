import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { 
  Main as MainLayout,
  Minimal as MinimalLayout,
  MinimalAuth as MinimalAuthLayout } from './layouts';
import requireAuth from './requireAuth';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Classroom as Classroom,
  CourseDetail as CourseDetailView,
  CourseProfile as CourseProfileView,
  Account as AccountView,
  CourseRequest as CourseRequestView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  // TODO: Get to login or landing page first
  // TODO: Route to page not authorized instead of not found
  // TODO: Rearragnge and understand index files
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={requireAuth(DashboardView)}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={requireAuth(UserListView)}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={requireAuth(ProductListView)}
        exact
        layout={MainLayout}
        path="/courses"
      />
      <RouteWithLayout
        component={requireAuth(SettingsView)}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={requireAuth(TypographyView)}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={requireAuth(Classroom)}
        exact
        layout={MinimalLayout}
        path="/classroom"
      />
      <RouteWithLayout
        component={requireAuth(IconsView)}
        exact
        layout={MainLayout}
        path="/certificates"
      />
      <RouteWithLayout
        component={requireAuth(AccountView)}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={requireAuth(CourseRequestView)}
        exact
        layout={MainLayout}
        path="/request-list"
      />
      <RouteWithLayout
        component={requireAuth(CourseDetailView)}
        exact
        layout={MainLayout}
        path="/course-detail"
      />
      <RouteWithLayout
        component={requireAuth(CourseProfileView)}
        exact
        layout={MainLayout}
        path="/course-profile"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalAuthLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalAuthLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
