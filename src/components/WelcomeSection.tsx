
import { Calendar, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WelcomeSection = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="text-center space-y-1">
        <h2 className="text-xl font-bold text-gray-800">Chào mừng đến với EatFit! 👋</h2>
        <p className="text-sm text-gray-600">Hành trình sống khỏe của bạn bắt đầu từ đây</p>
      </div>
      
      <Card className="gradient-bg text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold mb-1">Mục tiêu hôm nay</h3>
              <p className="text-white/90 text-xs">Giảm cân • 1,800 calo</p>
            </div>
            <Target className="h-6 w-6 text-white/90" />
          </div>
          <div className="mt-3 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-3/4"></div>
          </div>
          <p className="text-xs text-white/80 mt-1">Đã hoàn thành 75% mục tiêu</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeSection;
