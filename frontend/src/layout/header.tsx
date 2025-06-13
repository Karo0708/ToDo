import { BiTask } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "@tanstack/react-router";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <header className="relative border-b border-stone-200 bg-gray-100 backdrop-blur-sm">
        <div className="w-full px-3 lg:px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BiTask size={40} color="#a47de8" />
              <p className="text-lg text-stone-500 font-light tracking-wide">Welcome user</p>
            </div>
            <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-serif text-stone-800 tracking-tight">
              My Tasks
            </h1>
            <button onClick={()=>navigate({to: '/login'})} className="flex items-center gap-2 transition-all duration-300 border border-stone-200 rounded-md p-2 hover:bg-red-100 hover:border-red-300">
              <span className="flex items-center gap-1 text-stone-600 hover:text-red-800 transition-colors duration-300 text-sm">
                <TbLogout size={16} />
                SIGN OUT
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
