
import { User, Settings, Award, Heart, BookOpen, CreditCard, LogOut, Edit, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const userStats = [
  { label: "Ngày theo dõi", value: "45", icon: "📅" },
  { label: "Thử thách hoàn thành", value: "8", icon: "🏆" },
  { label: "Điểm tích lũy", value: "2,450", icon: "⭐" },
  { label: "Bạn bè", value: "23", icon: "👥" }
];

const achievements = [
  { name: "EatClean Master", description: "Hoàn thành 30 ngày ăn sạch", icon: "🥗", unlocked: true },
  { name: "Meal Prep Pro", description: "Chuẩn bị trước 50 bữa ăn", icon: "📦", unlocked: true },
  { name: "Community Hero", description: "Nhận 100 lượt thích", icon: "❤️", unlocked: false },
  { name: "Health Guardian", description: "Duy trì mục tiêu 90 ngày", icon: "🛡️", unlocked: false }
];

const menuItems = [
  { icon: Settings, label: "Cài đặt tài khoản", color: "text-gray-600" },
  { icon: Heart, label: "Sức khỏe & mục tiêu", color: "text-red-500" },
  { icon: BookOpen, label: "Khóa học dinh dưỡng", color: "text-blue-500" },
  { icon: Award, label: "Thành tích & huy hiệu", color: "text-yellow-500" },
  { icon: CreditCard, label: "EatFit Premium", color: "text-purple-500" },
  { icon: LogOut, label: "Đăng xuất", color: "text-red-600" }
];

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Minh Anh",
    email: "minhanh@gmail.com",
    goal: "Giảm cân",
    progress: 75
  });

  const editProfile = () => {
    console.log('Editing profile');
    const newName = prompt('Nhập tên mới:', userInfo.name);
    if (newName) {
      setUserInfo(prev => ({ ...prev, name: newName }));
      console.log('Profile updated:', { name: newName });
    }
  };

  const changeAvatar = () => {
    console.log('Changing avatar');
    alert('Thay đổi ảnh đại diện\n\nTính năng này sẽ cho phép bạn:\n- Chọn ảnh từ thiết bị\n- Chụp ảnh mới\n- Cắt và chỉnh sửa ảnh');
  };

  const handleMenuItem = (item: any) => {
    console.log('Menu item clicked:', item.label);
    
    switch (item.label) {
      case "Cài đặt tài khoản":
        alert('Cài đặt tài khoản\n\nBạn có thể:\n- Thay đổi thông tin cá nhân\n- Cập nhật mật khẩu\n- Quản lý quyền riêng tư');
        break;
      case "Sức khỏe & mục tiêu":
        alert('Sức khỏe & mục tiêu\n\nQuản lý:\n- Mục tiêu cân nặng\n- Chỉ số BMI\n- Lịch sử sức khỏe\n- Báo cáo tiến độ');
        break;
      case "Khóa học dinh dưỡng":
        alert('Khóa học dinh dưỡng\n\nKhám phá:\n- Kiến thức dinh dưỡng cơ bản\n- Cách lên kế hoạch bữa ăn\n- Tips nấu ăn healthy\n- Video hướng dẫn');
        break;
      case "Thành tích & huy hiệu":
        alert('Thành tích & huy hiệu\n\nXem:\n- Tất cả huy hiệu đã đạt\n- Tiến độ huy hiệu\n- Lịch sử thành tích\n- So sánh với bạn bè');
        break;
      case "EatFit Premium":
        alert('EatFit Premium\n\nNâng cấp để có:\n- Thực đơn không giới hạn\n- Tư vấn 1:1 với chuyên gia\n- Phân tích chi tiết\n- Loại bỏ quảng cáo');
        break;
      case "Đăng xuất":
        if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
          console.log('User logged out');
          alert('Đã đăng xuất thành công!');
        }
        break;
    }
  };

  const viewAchievement = (achievement: any) => {
    console.log('Viewing achievement:', achievement);
    const status = achievement.unlocked ? 'ĐÃ MỞ KHÓA' : 'CHƯA ĐẠT';
    alert(`${achievement.icon} ${achievement.name}\n\n${achievement.description}\n\nTrạng thái: ${status}`);
  };

  return (
    <div className="p-3 space-y-4">
      {/* Profile Header */}
      <Card className="gradient-bg text-white">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                👩‍🦱
              </div>
              <button
                onClick={changeAvatar}
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-eatfit-green rounded-full flex items-center justify-center"
              >
                <Camera className="h-3 w-3 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold">{userInfo.name}</h2>
              <p className="text-white/80 text-sm">{userInfo.email}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Premium</span>
                <span className="text-xs">Mục tiêu: {userInfo.goal}</span>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20" onClick={editProfile}>
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Tiến độ mục tiêu tháng này</span>
              <span>{userInfo.progress}%</span>
            </div>
            <div className="bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all"
                style={{ width: `${userInfo.progress}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Stats */}
      <div className="grid grid-cols-2 gap-2">
        {userStats.map((stat, index) => (
          <Card key={index} className="card-hover cursor-pointer" onClick={() => console.log('Stat clicked:', stat.label)}>
            <CardContent className="p-3 text-center">
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-gray-800">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Achievements */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">🏆 Thành tích gần đây</h3>
        <div className="grid grid-cols-2 gap-2">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`card-hover cursor-pointer ${achievement.unlocked ? '' : 'opacity-50'}`}
              onClick={() => viewAchievement(achievement)}
            >
              <CardContent className="p-3 text-center">
                <div className="text-lg mb-1">{achievement.icon}</div>
                <h4 className="text-xs font-medium">{achievement.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                {achievement.unlocked && (
                  <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">⚙️ Cài đặt & tiện ích</h3>
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleMenuItem(item)}
                  className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <Icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm text-gray-700 flex-1 text-left">{item.label}</span>
                  <span className="text-gray-400">›</span>
                </button>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
