
import { Bell, Clock, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    type: 'meal',
    title: 'Đến giờ ăn trưa rồi!',
    message: 'Gợi ý: Gà nướng cơm lứt (450 cal) phù hợp với mục tiêu hôm nay',
    time: '12:00',
    icon: Clock,
    color: 'text-blue-500'
  },
  {
    id: 2,
    type: 'activity',
    title: 'Tăng hoạt động',
    message: 'Bạn đã ngồi quá lâu! Hãy đi bộ 10 phút để tăng năng lượng',
    time: '14:30',
    icon: TrendingUp,
    color: 'text-green-500'
  },
  {
    id: 3,
    type: 'health',
    title: 'Nhắc nhở uống nước',
    message: 'Bạn cần uống thêm 2 ly nước để đạt mục tiêu hôm nay',
    time: '16:00',
    icon: AlertCircle,
    color: 'text-orange-500'
  }
];

const PersonalizedNotifications = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">🔔 Thông báo cá nhân</h3>
        <Button variant="ghost" size="sm" className="text-eatfit-green text-xs">
          <Bell className="h-3 w-3 mr-1" />
          Cài đặt
        </Button>
      </div>
      
      <div className="space-y-2">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          
          return (
            <Card key={notification.id} className="card-hover">
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <Icon className={`h-4 w-4 ${notification.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-xs">{notification.title}</h4>
                      <span className="text-xs text-gray-400">{notification.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalizedNotifications;
