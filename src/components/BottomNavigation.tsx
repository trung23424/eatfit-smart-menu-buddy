
import { Home, Search, Calendar, MessageSquare, User } from "lucide-react";

const navItems = [
  { id: 'home', icon: Home, label: 'Trang chủ' },
  { id: 'search', icon: Search, label: 'Tìm kiếm' },
  { id: 'calendar', icon: Calendar, label: 'Lịch trình' },
  { id: 'community', icon: MessageSquare, label: 'Cộng đồng' },
  { id: 'profile', icon: User, label: 'Cá nhân' }
];

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation = ({ activeTab, onTabChange }: BottomNavigationProps) => {
  return (
    <nav className="bg-white border-t border-gray-200 px-2 py-1 rounded-lg shadow-lg">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center gap-0.5 p-2 transition-colors relative ${
                isActive 
                  ? 'text-eatfit-green' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-eatfit-green' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="w-4 h-0.5 bg-eatfit-green rounded-full absolute bottom-0" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
