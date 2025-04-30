import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const user = useSelector(state => state.userDetails);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  }

  const displayName = user.userDetails?.firstName || 'User';
  const displayInitial = displayName[0].toUpperCase();

  return (
    <div className="bg-white/30 backdrop-blur-lg border-b border-indigo-200/50 sticky top-0 z-50 shadow-xl h-16 flex justify-between items-center px-6">
      <div className="text-2xl font-bold text-indigo-600 ">
        PayTM App
      </div>
      <div className="flex items-center space-x-3">
        <div className="text-gray-800 text-sm font-medium hidden sm:block">
          Hello
        </div>
        <div className="relative group">
          <div className="rounded-full h-10 w-10 bg-gradient-to-br from-indigo-500 to-indigo-700 flex justify-center items-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(79,70,229,0.5)]">
            <span className="text-white font-semibold text-lg">
              {displayInitial}
            </span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-1.5 rounded-lg font-medium hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};