
import { Activity, Droplets, Moon, Footprints } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const healthMetrics = [
  {
    id: 'water',
    label: 'Nước uống',
    value: 6,
    target: 8,
    unit: 'ly',
    icon: Droplets,
    color: 'text-blue-500',
    progress: 75
  },
  {
    id: 'steps',
    label: 'Bước chân',
    value: 7500,
    target: 10000,
    unit: 'bước',
    icon: Footprints,
    color: 'text-green-500',
    progress: 75
  },
  {
    id: 'sleep',
    label: 'Giấc ngủ',
    value: 7.2,
    target: 8,
    unit: 'giờ',
    icon: Moon,
    color: 'text-purple-500',
    progress: 90
  },
  {
    id: 'activity',
    label: 'Hoạt động',
    value: 45,
    target: 60,
    unit: 'phút',
    icon: Activity,
    color: 'text-orange-500',
    progress: 75
  }
];

const HealthTracker = () => {
  return (
    <div className="p-3 space-y-3">
      <h3 className="text-base font-semibold text-gray-800">💪 Theo dõi sức khỏe</h3>
      
      <div className="grid grid-cols-2 gap-2">
        {healthMetrics.map((metric) => {
          const Icon = metric.icon;
          
          return (
            <Card key={metric.id} className="card-hover">
              <CardContent className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-xs text-gray-500">{metric.progress}%</span>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium">{metric.label}</h4>
                  <p className="text-xs text-gray-500">
                    {metric.value}/{metric.target} {metric.unit}
                  </p>
                </div>
                
                <Progress value={metric.progress} className="h-1.5" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HealthTracker;
