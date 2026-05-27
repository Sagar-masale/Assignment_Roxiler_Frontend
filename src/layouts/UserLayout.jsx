import Navbar from "../components/common/Navbar"
import Sidebar from "../components/common/Sidebar"

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default UserLayout