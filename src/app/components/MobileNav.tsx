import { Link, useLocation } from "react-router";
import { Home, Calendar, Trophy, User } from "lucide-react";

export function MobileNav() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", icon: Home, label: "Inicio" },
    { path: "/schedule", icon: Calendar, label: "Calendario" },
    { path: "/tournament", icon: Trophy, label: "Torneos" },
    { path: "/profile", icon: User, label: "Perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              isActive(path)
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
