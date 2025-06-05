
import { Utensils, Apple, Beef, Wheat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const nutritionData = [
  {
    id: 'calories',
    label: 'Calo',
    current: 1350,
    target: 1800,
    unit: 'cal',
    icon: Apple,
    color: 'text-red-500',
    progress: 75
  },
  {
    id: 'protein',
    label: 'Protein',
    current: 85,
    target: 120,
    unit: 'g',
    icon: Beef,
    color: 'text-orange-500',
    progress: 71
  },
  {
    id: 'carbs',
    label: 'Carb',
    current: 160,
    target: 225,
    unit: 'g',
    icon: Wheat,
    color: 'text-yellow-500',
    progress: 71
  },
  {
    id: 'fat',
    label: 'Chất béo',
    current: 45,
    target: 60,
    unit: 'g',
    icon: Utensils,
    color: 'text-purple-500',
    progress: 75
  }
];

const NutritionTracker = () => {
  return (
    <div className="p-3 space-y-3">
      <h3 className="text-base font-semibold text-gray-800">📊 Theo dõi dinh dưỡng hôm nay</h3>
      
      <div className="grid grid-cols-2 gap-2">
        {nutritionData.map((item) => {
          const Icon = item.icon;
          
          return (
            <Card key={item.id} className="card-hover">
              <CardContent className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <Icon className={`h-4 w-4 ${item.color}`} />
                  <span className="text-xs text-gray-500">{item.progress}%</span>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium">{item.label}</h4>
                  <p className="text-xs text-gray-500">
                    {item.current}/{item.target} {item.unit}
                  </p>
                </div>
                
                <Progress value={item.progress} className="h-1.5" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default NutritionTracker;
