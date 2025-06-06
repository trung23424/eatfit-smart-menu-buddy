
import { Bell, Clock, TrendingUp, AlertCircle, X, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const initialNotifications = [
  {
    id: 1,
    type: 'meal',
    title: 'Đến giờ ăn trưa rồi!',
    message: 'Gợi ý: Gà nướng cơm lứt (450 cal) phù hợp với mục tiêu hôm nay',
    time: '12:00',
    icon: Clock,
    color: 'text-blue-500',
    isRead: false
  },
  {
    id: 2,
    type: 'activity',
    title: 'Tăng hoạt động',
    message: 'Bạn đã ngồi quá lâu! Hãy đi bộ 10 phút để tăng năng lượng',
    time: '14:30',
    icon: TrendingUp,
    color: 'text-green-500',
    isRead: false
  },
  {
    id: 3,
    type: 'health',
    title: 'Nhắc nhở uống nước',
    message: 'Bạn cần uống thêm 2 ly nước để đạt mục tiêu hôm nay',
    time: '16:00',
    icon: AlertCircle,
    color: 'text-orange-500',
    isRead: true
  }
];

const PersonalizedNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [showSettings, setShowSettings] = useState(false);

  const markAsRead = (notificationId: number) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === notificationId ? { ...notif, isRead: true } : notif
    ));
    console.log('Notification marked as read:', notificationId);
  };

  const dismissNotification = (notificationId: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== notificationId));
    console.log('Notification dismissed:', notificationId);
  };

  const handleNotificationClick = (notification: any) => {
    markAsRead(notification.id);
    
    switch (notification.type) {
      case 'meal':
        alert(`🍽️ ${notification.title}\n\n${notification.message}\n\nBạn có muốn xem gợi ý thực đơn không?`);
        break;
      case 'activity':
        alert(`💪 ${notification.title}\n\n${notification.message}\n\nHãy bắt đầu vận động ngay!`);
        break;
      case 'health':
        alert(`💧 ${notification.title}\n\n${notification.message}\n\nĐừng quên chăm sóc sức khỏe!`);
        break;
    }
  };

  const openSettings = () => {
    setShowSettings(!showSettings);
    console.log('Notification settings toggled');
  };

  const toggleNotificationType = (type: string) => {
    console.log('Toggled notification type:', type);
    alert(`Đã ${Math.random() > 0.5 ? 'bật' : 'tắt'} thông báo ${type}`);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800 flex items-center">
          🔔 Thông báo cá nhân
          {unreadCount > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </h3>
        <Button variant="ghost" size="sm" className="text-eatfit-green text-xs" onClick={openSettings}>
          <Bell className="h-3 w-3 mr-1" />
          Cài đặt
        </Button>
      </div>

      {showSettings && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-3">
            <h4 className="text-sm font-medium mb-2">⚙️ Cài đặt thông báo</h4>
            <div className="space-y-2">
              {['Bữa ăn', 'Hoạt động', 'Sức khỏe', 'Thử thách'].map((type) => (
                <button
                  key={type}
                  onClick={() => toggleNotificationType(type)}
                  className="w-full flex items-center justify-between p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm">{type}</span>
                  <div className="w-10 h-5 bg-eatfit-green rounded-full flex items-center justify-end px-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-2">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          
          return (
            <Card 
              key={notification.id} 
              className={`card-hover cursor-pointer ${notification.isRead ? 'opacity-75' : ''}`}
              onClick={() => handleNotificationClick(notification)}
            >
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`h-4 w-4 ${notification.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={`font-medium text-xs ${notification.isRead ? 'text-gray-600' : 'text-gray-800'}`}>
                        {notification.title}
                      </h4>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400">{notification.time}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            dismissNotification(notification.id);
                          }}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <X className="h-3 w-3 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <p className={`text-xs mt-1 ${notification.isRead ? 'text-gray-500' : 'text-gray-600'}`}>
                      {notification.message}
                    </p>
                    {!notification.isRead && (
                      <div className="w-2 h-2 bg-eatfit-green rounded-full mt-2"></div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <Card>
          <CardContent className="p-4 text-center text-gray-500">
            <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
            <p className="text-sm">Không có thông báo mới</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PersonalizedNotifications;
