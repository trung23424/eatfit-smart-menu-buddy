
import { Heart, Scale, Zap, Moon, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const healthMetrics = [
  {
    id: 'bmi',
    label: 'BMI',
    value: 22.5,
    target: '18.5-24.9',
    status: 'Bình thường',
    icon: Scale,
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    id: 'heart-rate',
    label: 'Nhịp tim',
    value: 72,
    target: '60-80',
    status: 'Tốt',
    icon: Heart,
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 'energy',
    label: 'Năng lượng',
    value: 85,
    target: '100',
    status: 'Khá tốt',
    icon: Zap,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 'sleep-quality',
    label: 'Chất lượng ngủ',
    value: 7.8,
    target: '8+',
    status: 'Tốt',
    icon: Moon,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  }
];

const weeklyGoals = [
  { label: 'Giảm 0.5kg', progress: 60, current: '0.3kg', target: '0.5kg' },
  { label: 'Uống đủ nước', progress: 80, current: '6.4L', target: '8L' },
  { label: 'Tập thể dục', progress: 75, current: '3 ngày', target: '4 ngày' },
  { label: 'Ăn đủ rau', progress: 90, current: '4.5 khẩu phần', target: '5 khẩu phần' }
];

const DetailedHealthTracking = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">💊 Theo dõi sức khỏe chi tiết</h3>
        <Button variant="ghost" size="sm" className="text-eatfit-green text-xs">
          <TrendingUp className="h-3 w-3 mr-1" />
          Báo cáo
        </Button>
      </div>

      {/* Chỉ số sức khỏe */}
      <div className="grid grid-cols-2 gap-2">
        {healthMetrics.map((metric) => {
          const Icon = metric.icon;
          
          return (
            <Card key={metric.id} className="card-hover">
              <CardContent className="p-3 space-y-2">
                <div className={`w-8 h-8 rounded-full ${metric.bgColor} flex items-center justify-center`}>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </div>
                
                <div>
                  <h4 className="text-xs font-medium">{metric.label}</h4>
                  <p className="text-sm font-semibold">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.status}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mục tiêu tuần */}
      <Card>
        <CardContent className="p-3 space-y-3">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-500" />
            <h4 className="font-medium text-sm">Mục tiêu tuần này</h4>
          </div>
          
          <div className="space-y-3">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">{goal.label}</span>
                  <span className="text-xs text-gray-500">{goal.current}/{goal.target}</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
                <div className="text-xs text-gray-500 text-right">{goal.progress}%</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gợi ý cải thiện */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-3">
          <h4 className="font-medium text-sm text-blue-800 mb-2">💡 Gợi ý cải thiện</h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Tăng lượng nước uống thêm 400ml/ngày</li>
            <li>• Thêm 30 phút đi bộ để đạt mục tiêu vận động</li>
            <li>• Ăn thêm 1 khẩu phần rau xanh</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailedHealthTracking;
