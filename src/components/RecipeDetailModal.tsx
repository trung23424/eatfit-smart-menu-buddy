
import { Clock, Star, Flame, ChefHat, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Recipe {
  id: number;
  name: string;
  calories: number;
  time: string;
  rating: number;
  image: string;
}

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeDetailModal = ({ recipe, isOpen, onClose }: RecipeDetailModalProps) => {
  if (!recipe || !isOpen) return null;

  const ingredients = [
    "2 quả bơ chín",
    "200g tôm sú",
    "100g rau xà lách",
    "50g cà chua cherry",
    "2 tbsp dầu olive",
    "1 tbsp nước cốt chanh",
    "Muối, tiêu"
  ];

  const instructions = [
    "Làm sạch tôm, luộc chín và để nguội",
    "Thái bơ thành miếng vừa ăn",
    "Rửa sạch rau xà lách và cà chua",
    "Trộn đều tất cả nguyên liệu",
    "Thêm dầu olive và nước cốt chanh",
    "Nêm nếm vừa miệng và thưởng thức"
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
          <h2 className="text-base font-semibold pr-8">{recipe.name}</h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 space-y-3">
            {/* Recipe Image */}
            <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-3xl">{recipe.image}</span>
              </div>
              <div className="absolute top-1 right-1">
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0 bg-white/80">
                  <Heart className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Recipe Stats */}
            <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-gray-500" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-orange-500" />
                  <span>{recipe.calories} cal</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span>{recipe.rating}</span>
                </div>
              </div>
            </div>

            {/* Difficulty & Tags */}
            <div className="flex gap-1 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                <ChefHat className="h-3 w-3 mr-1" />
                Dễ làm
              </Badge>
              <Badge variant="outline" className="text-xs">Healthy</Badge>
              <Badge variant="outline" className="text-xs">Giảm cân</Badge>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="font-semibold mb-2 text-sm">🥗 Nguyên liệu</h4>
              <ul className="space-y-1 text-xs">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="font-semibold mb-2 text-sm">👩‍🍳 Cách làm</h4>
              <ol className="space-y-2 text-xs">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
          <div className="flex gap-2">
            <Button className="flex-1 h-8 text-xs">
              <Heart className="h-3 w-3 mr-1" />
              Lưu công thức
            </Button>
            <Button variant="outline" className="flex-1 h-8 text-xs">
              <ChefHat className="h-3 w-3 mr-1" />
              Bắt đầu nấu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailModal;
