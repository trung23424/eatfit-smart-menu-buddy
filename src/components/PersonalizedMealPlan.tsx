
import { Clock, Flame, Star, ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const personalizedMeals = [
  {
    id: 1,
    time: 'Bữa sáng',
    name: 'Yến mạch hạnh nhân',
    description: 'Phù hợp mục tiêu giảm cân của bạn',
    calories: 280,
    prepTime: '5 phút',
    difficulty: 'Dễ',
    matchScore: 95,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop',
    nutrients: { protein: '12g', carbs: '45g', fat: '8g' }
  },
  {
    id: 2,
    time: 'Bữa trưa',
    name: 'Salad gà quinoa',
    description: 'Giàu protein, ít calo như bạn mong muốn',
    calories: 420,
    prepTime: '15 phút',
    difficulty: 'Trung bình',
    matchScore: 92,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop',
    nutrients: { protein: '35g', carbs: '30g', fat: '15g' }
  },
  {
    id: 3,
    time: 'Bữa tối',
    name: 'Cá hồi nướng rau củ',
    description: 'Omega-3 tốt cho sức khỏe tim mạch',
    calories: 380,
    prepTime: '20 phút',
    difficulty: 'Trung bình',
    matchScore: 88,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=200&fit=crop',
    nutrients: { protein: '28g', carbs: '25g', fat: '18g' }
  }
];

const PersonalizedMealPlan = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">
          🎯 Thực đơn cá nhân hóa
        </h3>
        <Button variant="ghost" size="sm" className="text-eatfit-green text-xs">
          <ChefHat className="h-3 w-3 mr-1" />
          Tùy chỉnh
        </Button>
      </div>

      <Card className="gradient-bg text-white">
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-sm">Thực đơn hôm nay</h4>
              <p className="text-xs text-white/90">Phù hợp 95% với mục tiêu của bạn</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-300 fill-current" />
              <span className="text-sm font-medium">9.5</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        {personalizedMeals.map((meal) => (
          <Card key={meal.id} className="card-hover cursor-pointer">
            <CardContent className="p-0">
              <div className="flex">
                <div className="w-20 h-20 relative overflow-hidden rounded-l-lg">
                  <img 
                    src={meal.image} 
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1">
                    <Badge className="text-xs px-1 py-0 bg-white/90 text-gray-800">
                      {meal.matchScore}%
                    </Badge>
                  </div>
                </div>
                
                <div className="flex-1 p-3 space-y-2">
                  <div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {meal.time}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs text-gray-500">{meal.matchScore}%</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-sm mt-1">{meal.name}</h4>
                    <p className="text-xs text-gray-500">{meal.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{meal.prepTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Flame className="h-3 w-3" />
                        <span>{meal.calories} cal</span>
                      </div>
                    </div>
                    <div className="text-xs">
                      {meal.nutrients.protein} • {meal.nutrients.carbs} • {meal.nutrients.fat}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="w-full" size="sm">
        Xem thực đơn tuần này
      </Button>
    </div>
  );
};

export default PersonalizedMealPlan;
