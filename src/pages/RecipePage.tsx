
import { useState } from "react";
import { Clock, Users, ChefHat, Heart, Share2, Bookmark, Star, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const recipe = {
  id: 1,
  title: "Salad Quinoa Bơ Tôm",
  description: "Món salad giàu protein, ít calories, phù hợp cho người giảm cân",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
  cookTime: "25 phút",
  servings: 2,
  difficulty: "Dễ",
  calories: 320,
  rating: 4.8,
  reviews: 234,
  isFavorite: false,
  isBookmarked: false,
  nutrition: {
    protein: "28g",
    carbs: "22g", 
    fat: "15g",
    fiber: "8g"
  },
  ingredients: [
    { name: "Quinoa", amount: "1/2 chén", checked: false },
    { name: "Tôm sú", amount: "200g", checked: false },
    { name: "Bơ chín", amount: "1 quả", checked: false },
    { name: "Cà chua cherry", amount: "10 quả", checked: false },
    { name: "Dưa chuột", amount: "1/2 quả", checked: false },
    { name: "Hành tím", amount: "1/4 quả", checked: false },
    { name: "Rau mầm", amount: "1 nắm", checked: false },
    { name: "Dầu olive", amount: "2 tbsp", checked: false },
    { name: "Chanh", amount: "1/2 quả", checked: false },
    { name: "Muối, tiêu", amount: "vừa đủ", checked: false }
  ],
  instructions: [
    { step: 1, title: "Chuẩn bị quinoa", content: "Vo sạch quinoa và nấu trong 15 phút cho đến khi mềm. Để nguội.", completed: false },
    { step: 2, title: "Sơ chế tôm", content: "Luộc tôm trong 3-4 phút, bóc vỏ và cắt đôi dọc.", completed: false },
    { step: 3, title: "Chuẩn bị rau", content: "Thái nhỏ bơ, cà chua cherry, dưa chuột. Thái lát mỏng hành tím.", completed: false },
    { step: 4, title: "Làm dressing", content: "Trộn dầu olive với nước cốt chanh, muối tiêu.", completed: false },
    { step: 5, title: "Trộn salad", content: "Trộn tất cả nguyên liệu với dressing. Trang trí với rau mầm.", completed: false }
  ],
  tips: [
    "Có thể thay quinoa bằng bulgur hoặc gạo lứt",
    "Thêm feta cheese để tăng hương vị",
    "Bảo quản tối đa 2 ngày trong tủ lạnh"
  ]
};

const RecipePage = () => {
  const [activeTab, setActiveTab] = useState("ingredients");
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);
  const [isBookmarked, setIsBookmarked] = useState(recipe.isBookmarked);

  const toggleIngredient = (index: number) => {
    const updated = [...ingredients];
    updated[index].checked = !updated[index].checked;
    setIngredients(updated);
  };

  const toggleInstruction = (index: number) => {
    const updated = [...instructions];
    updated[index].completed = !updated[index].completed;
    setInstructions(updated);
  };

  const completedIngredients = ingredients.filter(i => i.checked).length;
  const completedInstructions = instructions.filter(i => i.completed).length;

  return (
    <div className="pb-20">
      {/* Header Image */}
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Header Actions */}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <Button variant="secondary" size="sm" className="bg-white/90">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white/90"
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'text-red-500 fill-current' : ''}`} />
            </Button>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-white/90"
              onClick={() => setIsBookmarked(!isBookmarked)}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'text-blue-500 fill-current' : ''}`} />
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/90">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Recipe Rating */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{recipe.rating}</span>
              <span className="text-xs text-gray-500">({recipe.reviews} đánh giá)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 space-y-4">
        {/* Recipe Info */}
        <div>
          <h1 className="text-lg font-bold text-gray-800 mb-1">{recipe.title}</h1>
          <p className="text-sm text-gray-600 mb-3">{recipe.description}</p>
          
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <Clock className="h-4 w-4 text-gray-500 mx-auto mb-1" />
              <span className="text-xs font-medium">{recipe.cookTime}</span>
              <p className="text-xs text-gray-500">Thời gian</p>
            </div>
            <div className="text-center">
              <Users className="h-4 w-4 text-gray-500 mx-auto mb-1" />
              <span className="text-xs font-medium">{recipe.servings} người</span>
              <p className="text-xs text-gray-500">Khẩu phần</p>
            </div>
            <div className="text-center">
              <ChefHat className="h-4 w-4 text-gray-500 mx-auto mb-1" />
              <span className="text-xs font-medium">{recipe.difficulty}</span>
              <p className="text-xs text-gray-500">Độ khó</p>
            </div>
          </div>
        </div>

        {/* Nutrition Facts */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">🍎 Thông tin dinh dưỡng (1 khẩu phần)</CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <div className="grid grid-cols-2 gap-3 text-center">
              <div>
                <p className="text-lg font-bold text-orange-500">{recipe.calories}</p>
                <p className="text-xs text-gray-500">Calories</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="font-medium text-blue-500">{recipe.nutrition.protein}</p>
                  <p className="text-gray-500">Protein</p>
                </div>
                <div>
                  <p className="font-medium text-green-500">{recipe.nutrition.carbs}</p>
                  <p className="text-gray-500">Carbs</p>
                </div>
                <div>
                  <p className="font-medium text-purple-500">{recipe.nutrition.fat}</p>
                  <p className="text-gray-500">Fat</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Cards */}
        <div className="grid grid-cols-2 gap-2">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-3 text-center">
              <p className="text-sm font-medium text-blue-700">Nguyên liệu</p>
              <p className="text-xs text-blue-600">{completedIngredients}/{ingredients.length} hoàn thành</p>
              <Progress value={(completedIngredients / ingredients.length) * 100} className="h-1 mt-1" />
            </CardContent>
          </Card>
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-3 text-center">
              <p className="text-sm font-medium text-green-700">Các bước</p>
              <p className="text-xs text-green-600">{completedInstructions}/{instructions.length} hoàn thành</p>
              <Progress value={(completedInstructions / instructions.length) * 100} className="h-1 mt-1" />
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ingredients" className="text-xs">Nguyên liệu</TabsTrigger>
            <TabsTrigger value="instructions" className="text-xs">Hướng dẫn</TabsTrigger>
            <TabsTrigger value="tips" className="text-xs">Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients" className="mt-3">
            <Card>
              <CardContent className="p-3 space-y-2">
                {ingredients.map((ingredient, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
                      ingredient.checked ? 'bg-green-50 line-through text-gray-500' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => toggleIngredient(index)}
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                      ingredient.checked ? 'bg-green-500 border-green-500' : 'border-gray-300'
                    }`}>
                      {ingredient.checked && <span className="text-white text-xs">✓</span>}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium">{ingredient.name}</span>
                      <span className="text-xs text-gray-500 ml-2">{ingredient.amount}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructions" className="mt-3">
            <div className="space-y-3">
              {instructions.map((instruction, index) => (
                <Card key={index} className={instruction.completed ? 'bg-green-50 border-green-200' : ''}>
                  <CardContent className="p-3">
                    <div className="flex items-start gap-3">
                      <div 
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                          instruction.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
                        }`}
                        onClick={() => toggleInstruction(index)}
                      >
                        {instruction.completed ? (
                          <span className="text-white text-xs">✓</span>
                        ) : (
                          <span className="text-xs font-medium">{instruction.step}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-medium mb-1 ${instruction.completed ? 'line-through text-gray-500' : ''}`}>
                          {instruction.title}
                        </h4>
                        <p className={`text-xs ${instruction.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                          {instruction.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="mt-3">
            <Card>
              <CardContent className="p-3 space-y-2">
                {recipe.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-yellow-500 text-sm">💡</span>
                    <p className="text-xs text-gray-700">{tip}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button className="flex-1">
            <Plus className="h-4 w-4 mr-1" />
            Thêm vào lịch nấu
          </Button>
          <Button variant="outline" className="flex-1">
            <Share2 className="h-4 w-4 mr-1" />
            Chia sẻ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
