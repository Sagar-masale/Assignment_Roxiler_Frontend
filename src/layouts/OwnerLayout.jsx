import { LayoutDashboard, Star, Lock, LogOut } from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const OwnerLayout = ({ children }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <div className="w-[260px] bg-white border-r p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10">Store Panel</h1>

          <div className="space-y-3">
            <NavLink
              to="/owner"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>

            <NavLink
              to="/owner/ratings"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100"
            >
              <Star size={20} />
              Ratings
            </NavLink>

            <NavLink
              to="/owner/update-password"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100"
            >
              <Lock size={20} />
              Update Password
            </NavLink>
          </div>
        </div>

        <button
          onClick={logoutHandler}
          className="flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      <div className="flex-1 p-8">{children}</div>
    </div>
  );
};

export default OwnerLayout;
