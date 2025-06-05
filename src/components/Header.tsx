
import { Menu, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <h1 className="text-xl font-bold text-eatfit-green">EatFit</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-eatfit-orange text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
