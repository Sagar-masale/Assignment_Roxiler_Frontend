import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminUsers from "../pages/admin/Users";
import AdminStores from "../pages/admin/Stores";
import CreateUser from "../pages/admin/CreateUser";
import CreateStore from "../pages/admin/CreateStore";
import UserDetails from "../pages/admin/UserDetails";

import UserStores from "../pages/admin/Stores";
import UserProfile from "../pages/user/Profile";
import UserUpdatePassword from "../pages/owner/UpdatePassword";

import OwnerDashboard from "../pages/owner/Dashboard";
import OwnerRatings from "../pages/owner/Ratings";
import OwnerUpdatePassword from "../pages/owner/UpdatePassword";

import ProtectedRoute from "../components/common/ProtectedRoute";

import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="admin">
              <AdminUsers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/stores"
          element={
            <ProtectedRoute role="admin">
              <AdminStores />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-user"
          element={
            <ProtectedRoute role="admin">
              <CreateUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/create-store"
          element={
            <ProtectedRoute role="admin">
              <CreateStore />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/user/:id"
          element={
            <ProtectedRoute role="admin">
              <UserDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/stores"
          element={
            <ProtectedRoute role="user">
              <UserStores />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute role="user">
              <UserProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-password"
          element={
            <ProtectedRoute role="user">
              <UserUpdatePassword />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner"
          element={
            <ProtectedRoute role="owner">
              <OwnerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/ratings"
          element={
            <ProtectedRoute role="owner">
              <OwnerRatings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/owner/update-password"
          element={
            <ProtectedRoute role="owner">
              <OwnerUpdatePassword />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
