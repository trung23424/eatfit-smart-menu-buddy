
import { Clock, Star, Flame, ChefHat, Heart, X, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Meal {
  id: number;
  time: string;
  name: string;
  description: string;
  calories: number;
  prepTime: string;
  difficulty: string;
  matchScore: number;
  image: string;
  nutrients: { protein: string; carbs: string; fat: string };
  isFavorite: boolean;
}

interface MealDetailModalProps {
  meal: Meal | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite: (mealId: number) => void;
}

const MealDetailModal = ({ meal, isOpen, onClose, onToggleFavorite }: MealDetailModalProps) => {
  if (!meal || !isOpen) return null;

  const nutritionData = [
    { name: 'Protein', value: meal.nutrients.protein, color: 'bg-blue-500', percentage: 60 },
    { name: 'Carbs', value: meal.nutrients.carbs, color: 'bg-green-500', percentage: 75 },
    { name: 'Fat', value: meal.nutrients.fat, color: 'bg-orange-500', percentage: 30 }
  ];

  return (
    <div className="absolute inset-0 bg-black/60 z-40 flex items-center justify-center p-3">
      <div className="bg-white rounded-xl w-full max-w-[300px] max-h-[85vh] shadow-2xl animate-scale-in overflow-hidden flex flex-col">
        {/* Header */}
        <div className="relative px-3 py-2 border-b border-gray-100 flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute right-2 top-2 p-1 rounded-full hover:bg-gray-100 z-10"
          >
            <X className="h-4 w-4" />
          </button>
          <h2 className="text-base font-semibold pr-8">{meal.name}</h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 space-y-3">
            {/* Meal Image */}
            <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative">
              <img 
                src={meal.image} 
                alt={meal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1 left-1">
                <Badge className="bg-white/90 text-gray-800 text-xs">
                  <Target className="h-3 w-3 mr-1" />
                  {meal.matchScore}%
                </Badge>
              </div>
              <button
                onClick={() => onToggleFavorite(meal.id)}
                className="absolute top-1 right-1 p-1.5 rounded-full bg-white/80 hover:bg-white"
              >
                <Heart 
                  className={`h-3 w-3 ${meal.isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                />
              </button>
            </div>

            {/* Match Score */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium">Độ phù hợp với mục tiêu</span>
                <span className="text-xs font-bold text-green-600">{meal.matchScore}%</span>
              </div>
              <Progress value={meal.matchScore} className="h-1.5" />
              <p className="text-xs text-gray-600 mt-1">{meal.description}</p>
            </div>

            {/* Meal Stats */}
            <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs font-medium">
                  <Clock className="h-3 w-3 text-gray-500" />
                  <span>{meal.prepTime}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Thời gian</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs font-medium">
                  <Flame className="h-3 w-3 text-orange-500" />
                  <span>{meal.calories}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Calories</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs font-medium">
                  <ChefHat className="h-3 w-3 text-purple-500" />
                  <span>{meal.difficulty}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Độ khó</p>
              </div>
            </div>

            {/* Nutrition Breakdown */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-1 text-sm">
                <Target className="h-4 w-4" />
                Thành phần dinh dưỡng
              </h4>
              <div className="space-y-2">
                {nutritionData.map((nutrient, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium">{nutrient.name}</span>
                      <span className="text-xs text-gray-600">{nutrient.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${nutrient.color}`}
                        style={{ width: `${nutrient.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-semibold mb-2 text-sm">✨ Lợi ích</h4>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">Giảm cân hiệu quả</Badge>
                <Badge variant="outline" className="text-xs">Tăng cường năng lượng</Badge>
                <Badge variant="outline" className="text-xs">Cải thiện tiêu hóa</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
          <div className="flex gap-2">
            <Button className="flex-1 h-8 text-xs">
              <ChefHat className="h-3 w-3 mr-1" />
              Xem công thức
            </Button>
            <Button variant="outline" className="flex-1 h-8 text-xs">
              <Users className="h-3 w-3 mr-1" />
              Thêm vào lịch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetailModal;
