
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
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">📊 Theo dõi sức khỏe</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {healthMetrics.map((metric) => {
          const Icon = metric.icon;
          
          return (
            <Card key={metric.id} className="card-hover">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Icon className={`h-5 w-5 ${metric.color}`} />
                  <span className="text-xs text-gray-500">{metric.progress}%</span>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium">{metric.label}</h4>
                  <p className="text-xs text-gray-500">
                    {metric.value}/{metric.target} {metric.unit}
                  </p>
                </div>
                
                <Progress value={metric.progress} className="h-2" />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HealthTracker;
