
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
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4 z-40">
      <div className="bg-white rounded-xl w-full max-w-sm max-h-[600px] overflow-hidden shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="relative px-4 py-3 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 p-1 rounded-full hover:bg-gray-100 z-10"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold pr-8">{recipe.name}</h2>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[480px]">
          <div className="p-4 space-y-4">
            {/* Recipe Image */}
            <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-4xl">{recipe.image}</span>
              </div>
              <div className="absolute top-2 right-2">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Recipe Stats */}
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span>{recipe.calories} cal</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{recipe.rating}</span>
                </div>
              </div>
            </div>

            {/* Difficulty & Tags */}
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-sm">
                <ChefHat className="h-4 w-4 mr-1" />
                Dễ làm
              </Badge>
              <Badge variant="outline" className="text-sm">Healthy</Badge>
              <Badge variant="outline" className="text-sm">Giảm cân</Badge>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="font-semibold mb-3 text-base">🥗 Nguyên liệu</h4>
              <ul className="space-y-2 text-sm">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h4 className="font-semibold mb-3 text-base">👩‍🍳 Cách làm</h4>
              <ol className="space-y-3 text-sm">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="pt-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex gap-3">
            <Button className="flex-1 h-10">
              <Heart className="h-4 w-4 mr-2" />
              Lưu công thức
            </Button>
            <Button variant="outline" className="flex-1 h-10">
              <ChefHat className="h-4 w-4 mr-2" />
              Bắt đầu nấu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailModal;
