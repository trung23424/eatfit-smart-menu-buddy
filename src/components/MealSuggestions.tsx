import { Clock, Flame, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import RecipeDetailModal from "./RecipeDetailModal";

const meals = [
  {
    id: 1,
    name: 'Salad Quinoa Bơ',
    time: '15 phút',
    calories: '320',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
    type: 'Bữa sáng',
    difficulty: 'Dễ',
    ingredients: ['Quinoa', 'Bơ', 'Cà chua']
  },
  {
    id: 2,
    name: 'Gà Nướng Cơm Lứt',
    time: '25 phút',
    calories: '450',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
    type: 'Bữa trưa',
    difficulty: 'Trung bình',
    ingredients: ['Ức gà', 'Cơm lứt', 'Rau củ']
  },
  {
    id: 3,
    name: 'Súp Rau Củ Dinh Dưỡng',
    time: '20 phút',
    calories: '250',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
    type: 'Bữa tối',
    difficulty: 'Dễ',
    ingredients: ['Cà rót', 'Bông cải', 'Nấm']
  }
];

const MealSuggestions = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const viewRecipe = (meal: any) => {
    // Convert meal data to recipe format for the modal
    const recipeData = {
      id: meal.id,
      name: meal.name,
      calories: parseInt(meal.calories),
      time: meal.time,
      rating: 4.5, // Default rating
      image: "🍽️" // Default emoji for suggestions
    };
    
    setSelectedRecipe(recipeData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">🍱 Gợi ý bữa ăn hôm nay</h3>
        <span className="text-xs text-eatfit-green font-medium">Xem tất cả</span>
      </div>
      
      <div className="space-y-2">
        {meals.map((meal) => (
          <Card key={meal.id} className="overflow-hidden card-hover cursor-pointer" onClick={() => viewRecipe(meal)}>
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-16 h-16 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={meal.image} 
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1">
                    <Badge variant="secondary" className="text-xs px-1 py-0">
                      {meal.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex-1 p-2 space-y-1">
                  <div>
                    <h4 className="font-medium text-xs">{meal.name}</h4>
                    <p className="text-xs text-gray-500">{meal.ingredients.join(', ')}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{meal.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      <span>{meal.calories} cal</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recipe Detail Modal */}
      <RecipeDetailModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default MealSuggestions;
