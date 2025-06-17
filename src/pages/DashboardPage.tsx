
import { TrendingUp, Calendar, Target, Award, Scale, Droplets, Footprints, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

const weightData = [
  { date: "T2", weight: 65.2, target: 63 },
  { date: "T3", weight: 65.0, target: 63 },
  { date: "T4", weight: 64.8, target: 63 },
  { date: "T5", weight: 64.5, target: 63 },
  { date: "T6", weight: 64.3, target: 63 },
  { date: "T7", weight: 64.1, target: 63 },
  { date: "CN", weight: 63.9, target: 63 },
];

const caloriesData = [
  { date: "T2", consumed: 1800, target: 1600 },
  { date: "T3", consumed: 1650, target: 1600 },
  { date: "T4", consumed: 1750, target: 1600 },
  { date: "T5", consumed: 1580, target: 1600 },
  { date: "T6", consumed: 1620, target: 1600 },
  { date: "T7", consumed: 1700, target: 1600 },
  { date: "CN", consumed: 1550, target: 1600 },
];

const weeklyStats = [
  { label: "Bữa ăn đã log", value: 18, target: 21, unit: "bữa", icon: Target, color: "text-blue-500" },
  { label: "Calories trung bình", value: 1650, target: 1600, unit: "cal", icon: Activity, color: "text-orange-500" },
  { label: "Nước uống TB", value: 2.1, target: 2.5, unit: "lít", icon: Droplets, color: "text-blue-400" },
  { label: "Bước chân TB", value: 8500, target: 10000, unit: "bước", icon: Footprints, color: "text-green-500" },
];

const achievements = [
  { name: "Tuần hoàn hảo", description: "Log đủ 21 bữa ăn", earned: false, progress: 18, target: 21 },
  { name: "Giảm cân ổn định", description: "Giảm 0.5kg/tuần", earned: true, progress: 0.6, target: 0.5 },
  { name: "Uống nước đều", description: "7 ngày uống đủ nước", earned: false, progress: 5, target: 7 },
];

const DashboardPage = () => {
  return (
    <div className="p-3 space-y-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-800">📈 Tiến trình của bạn</h1>
          <p className="text-sm text-gray-500">Tuần này (13-19/1)</p>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-1" />
          Xem tháng
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-2">
        <Card className="card-hover">
          <CardContent className="p-3 text-center">
            <Scale className="h-5 w-5 text-blue-500 mx-auto mb-1" />
            <p className="text-lg font-bold">63.9kg</p>
            <p className="text-xs text-gray-500">Hiện tại</p>
            <Badge variant="outline" className="mt-1 text-xs">-1.3kg tuần này</Badge>
          </CardContent>
        </Card>
        <Card className="card-hover">
          <CardContent className="p-3 text-center">
            <Target className="h-5 w-5 text-green-500 mx-auto mb-1" />
            <p className="text-lg font-bold">63.0kg</p>
            <p className="text-xs text-gray-500">Mục tiêu</p>
            <Badge variant="outline" className="mt-1 text-xs">Còn 0.9kg</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Weight Chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Biểu đồ cân nặng
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <ChartContainer
            config={{
              weight: { label: "Cân nặng", color: "#3b82f6" },
              target: { label: "Mục tiêu", color: "#10b981" }
            }}
            className="h-40"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <XAxis dataKey="date" />
                <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="weight" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="target" stroke="#10b981" strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Calories Chart */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">📊 Calories hàng ngày</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0">
          <ChartContainer
            config={{
              consumed: { label: "Đã ăn", color: "#f59e0b" },
              target: { label: "Mục tiêu", color: "#ef4444" }
            }}
            className="h-40"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={caloriesData}>
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="consumed" fill="#f59e0b" radius={[2, 2, 0, 0]} />
                <Bar dataKey="target" fill="#ef4444" fillOpacity={0.3} radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Weekly Stats */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">📋 Thống kê tuần</CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0 space-y-3">
          {weeklyStats.map((stat, index) => {
            const Icon = stat.icon;
            const progress = (stat.value / stat.target) * 100;
            
            return (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                    <span className="text-xs font-medium">{stat.label}</span>
                  </div>
                  <span className="text-xs text-gray-600">
                    {stat.value}/{stat.target} {stat.unit}
                  </span>
                </div>
                <Progress value={Math.min(progress, 100)} className="h-1.5" />
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm flex items-center gap-2">
            <Award className="h-4 w-4 text-yellow-500" />
            Thành tựu
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-0 space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className={`p-2 rounded-lg border ${achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${achievement.earned ? 'bg-yellow-500' : 'bg-gray-300'}`} />
                  <h4 className="text-xs font-medium">{achievement.name}</h4>
                </div>
                {achievement.earned && <Badge className="text-xs bg-yellow-500">Hoàn thành!</Badge>}
              </div>
              <p className="text-xs text-gray-600 mb-1">{achievement.description}</p>
              <div className="flex items-center justify-between">
                <Progress value={(achievement.progress / achievement.target) * 100} className="h-1 flex-1 mr-2" />
                <span className="text-xs text-gray-500">{achievement.progress}/{achievement.target}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
