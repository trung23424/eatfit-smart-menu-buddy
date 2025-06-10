
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
    <div className="absolute inset-0 bg-black/60 z-40 overflow-y-auto">
      <div className="min-h-full flex items-start justify-center p-4 pt-16">
        <div className="bg-white rounded-xl w-full max-w-sm shadow-2xl animate-scale-in mb-16">
          {/* Header */}
          <div className="relative px-4 py-3 border-b border-gray-100">
            <button
              onClick={onClose}
              className="absolute right-3 top-3 p-1 rounded-full hover:bg-gray-100 z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-semibold pr-8">{meal.name}</h2>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Meal Image */}
            <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative">
              <img 
                src={meal.image} 
                alt={meal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className="bg-white/90 text-gray-800 text-sm">
                  <Target className="h-3 w-3 mr-1" />
                  {meal.matchScore}%
                </Badge>
              </div>
              <button
                onClick={() => onToggleFavorite(meal.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
              >
                <Heart 
                  className={`h-4 w-4 ${meal.isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                />
              </button>
            </div>

            {/* Match Score */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Độ phù hợp với mục tiêu</span>
                <span className="text-sm font-bold text-green-600">{meal.matchScore}%</span>
              </div>
              <Progress value={meal.matchScore} className="h-2" />
              <p className="text-xs text-gray-600 mt-2">{meal.description}</p>
            </div>

            {/* Meal Stats */}
            <div className="grid grid-cols-3 gap-3 bg-gray-50 p-4 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-sm font-medium">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>{meal.prepTime}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Thời gian</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-sm font-medium">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span>{meal.calories}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Calories</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-sm font-medium">
                  <ChefHat className="h-4 w-4 text-purple-500" />
                  <span>{meal.difficulty}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Độ khó</p>
              </div>
            </div>

            {/* Nutrition Breakdown */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-base">
                <Target className="h-5 w-5" />
                Thành phần dinh dưỡng
              </h4>
              <div className="space-y-3">
                {nutritionData.map((nutrient, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{nutrient.name}</span>
                      <span className="text-sm text-gray-600">{nutrient.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${nutrient.color}`}
                        style={{ width: `${nutrient.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-semibold mb-3 text-base">✨ Lợi ích</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-sm">Giảm cân hiệu quả</Badge>
                <Badge variant="outline" className="text-sm">Tăng cường năng lượng</Badge>
                <Badge variant="outline" className="text-sm">Cải thiện tiêu hóa</Badge>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex gap-3">
              <Button className="flex-1 h-10">
                <ChefHat className="h-4 w-4 mr-2" />
                Xem công thức
              </Button>
              <Button variant="outline" className="flex-1 h-10">
                <Users className="h-4 w-4 mr-2" />
                Thêm vào lịch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetailModal;
