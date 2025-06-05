
import { TrendingUp, Calendar, Award, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const weeklyStats = [
  { label: 'Calo trung bình', value: '1,680', target: '1,800', progress: 93 },
  { label: 'Ngày hoàn thành mục tiêu', value: '5', target: '7', progress: 71 },
  { label: 'Bước chân trung bình', value: '8,500', target: '10,000', progress: 85 }
];

const achievements = [
  { title: 'Tuần đầu hoàn hảo', description: 'Hoàn thành mục tiêu 7/7 ngày', earned: true },
  { title: 'Nhà dinh dưỡng', description: 'Đạt đủ protein 5 ngày liên tiếp', earned: true },
  { title: 'Người kiên trì', description: 'Sử dụng app 30 ngày liên tiếp', earned: false }
];

const ProgressReports = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">📈 Báo cáo tiến trình</h3>
        <Button variant="ghost" size="sm" className="text-eatfit-green text-xs">
          <BarChart3 className="h-3 w-3 mr-1" />
          Chi tiết
        </Button>
      </div>

      {/* Weekly Stats */}
      <Card className="card-hover">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-blue-500" />
            <h4 className="font-medium text-sm">Thống kê tuần này</h4>
          </div>
          
          <div className="space-y-2">
            {weeklyStats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">{stat.label}</span>
                  <span className="text-xs font-medium">{stat.value}/{stat.target}</span>
                </div>
                <Progress value={stat.progress} className="h-1.5" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="card-hover">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-yellow-500" />
            <h4 className="font-medium text-sm">Thành tích</h4>
          </div>
          
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center gap-2 p-2 rounded ${
                achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  achievement.earned ? 'bg-yellow-500' : 'bg-gray-300'
                }`}>
                  <Award className={`h-3 w-3 ${achievement.earned ? 'text-white' : 'text-gray-500'}`} />
                </div>
                <div className="flex-1">
                  <h5 className="text-xs font-medium">{achievement.title}</h5>
                  <p className="text-xs text-gray-500">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressReports;
