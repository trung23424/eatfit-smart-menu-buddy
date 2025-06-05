
import { Target, Dumbbell, Leaf, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const goals = [
  {
    id: 'weight-loss',
    title: 'Giảm cân',
    description: 'Thực đơn ít calo, giàu chất xơ',
    icon: Target,
    color: 'bg-red-50 text-red-600',
    selected: 'bg-red-500 text-white'
  },
  {
    id: 'muscle-gain',
    title: 'Tăng cơ',
    description: 'Protein cao, hỗ trợ xây dựng cơ bắp',
    icon: Dumbbell,
    color: 'bg-blue-50 text-blue-600',
    selected: 'bg-blue-500 text-white'
  },
  {
    id: 'vegan',
    title: 'Ăn chay',
    description: 'Thực đơn thuần chay bổ dưỡng',
    icon: Leaf,
    color: 'bg-green-50 text-green-600',
    selected: 'bg-green-500 text-white'
  },
  {
    id: 'quick',
    title: 'Tiết kiệm thời gian',
    description: 'Món ăn nhanh, dễ làm dưới 15 phút',
    icon: Clock,
    color: 'bg-orange-50 text-orange-600',
    selected: 'bg-orange-500 text-white'
  }
];

const GoalSelector = () => {
  const [selectedGoal, setSelectedGoal] = useState('weight-loss');

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">🎯 Chọn mục tiêu của bạn</h3>
      <div className="grid grid-cols-2 gap-3">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selectedGoal === goal.id;
          
          return (
            <Card 
              key={goal.id}
              className={`cursor-pointer transition-all card-hover ${
                isSelected ? 'ring-2 ring-eatfit-green' : ''
              }`}
              onClick={() => setSelectedGoal(goal.id)}
            >
              <CardContent className="p-4 text-center space-y-2">
                <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center ${
                  isSelected ? goal.selected : goal.color
                } transition-colors`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-medium text-sm">{goal.title}</h4>
                <p className="text-xs text-gray-500 leading-tight">{goal.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default GoalSelector;
