// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // ⛔ Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ⛔ Admin-only route check
  if (adminOnly && user.role !== "admin" && user.username !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  // ✅ Authorized
  return children;
}
