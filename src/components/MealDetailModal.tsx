
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
    <div className="absolute inset-0 bg-black/50 flex items-end z-50">
      <div className="w-full bg-white rounded-t-2xl h-[75%] overflow-hidden animate-slide-up flex flex-col">
        {/* Handle bar */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-2 mb-3 flex-shrink-0"></div>
        
        {/* Header - Fixed */}
        <div className="relative px-4 pb-3 flex-shrink-0 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute right-4 top-0 p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </button>
          <h2 className="text-lg font-semibold pr-8">{meal.name}</h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 py-3 space-y-3">
            {/* Meal Image - Compact */}
            <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative">
              <img 
                src={meal.image} 
                alt={meal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <Badge className="bg-white/90 text-gray-800 text-xs">
                  <Target className="h-3 w-3 mr-1" />
                  {meal.matchScore}%
                </Badge>
              </div>
              <button
                onClick={() => onToggleFavorite(meal.id)}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white"
              >
                <Heart 
                  className={`h-3 w-3 ${meal.isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                />
              </button>
            </div>

            {/* Match Score - Compact */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Độ phù hợp với mục tiêu</span>
                <span className="text-sm font-bold text-green-600">{meal.matchScore}%</span>
              </div>
              <Progress value={meal.matchScore} className="h-1.5" />
              <p className="text-xs text-gray-600 mt-1">{meal.description}</p>
            </div>

            {/* Meal Stats - Compact Grid */}
            <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2.5 rounded-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs">
                  <Clock className="h-3 w-3 text-gray-500" />
                  <span>{meal.prepTime}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Thời gian</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs">
                  <Flame className="h-3 w-3 text-orange-500" />
                  <span>{meal.calories}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Calories</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-xs">
                  <ChefHat className="h-3 w-3 text-purple-500" />
                  <span>{meal.difficulty}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">Độ khó</p>
              </div>
            </div>

            {/* Nutrition Breakdown - Compact */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
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

            {/* Benefits - Compact */}
            <div>
              <h4 className="font-semibold mb-2 text-sm">✨ Lợi ích</h4>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline" className="text-xs py-0.5">Giảm cân hiệu quả</Badge>
                <Badge variant="outline" className="text-xs py-0.5">Tăng cường năng lượng</Badge>
                <Badge variant="outline" className="text-xs py-0.5">Cải thiện tiêu hóa</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="flex-shrink-0 p-4 border-t border-gray-100 bg-white">
          <div className="flex gap-2">
            <Button className="flex-1 h-9 text-sm">
              <ChefHat className="h-3 w-3 mr-2" />
              Xem công thức
            </Button>
            <Button variant="outline" className="flex-1 h-9 text-sm">
              <Users className="h-3 w-3 mr-2" />
              Thêm vào lịch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetailModal;
