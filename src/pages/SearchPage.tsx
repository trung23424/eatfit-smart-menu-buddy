
import { Search, Filter, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const popularSearches = [
  "Salad giảm cân",
  "Món chay protein cao", 
  "Bữa sáng nhanh",
  "Smoothie detox",
  "Cơm tối ít calo"
];

const recentRecipes = [
  {
    id: 1,
    name: "Salad bơ tôm",
    calories: 320,
    time: "10 phút",
    rating: 4.8,
    image: "🥗"
  },
  {
    id: 2,
    name: "Smoothie xanh",
    calories: 180,
    time: "5 phút", 
    rating: 4.6,
    image: "🥤"
  },
  {
    id: 3,
    name: "Cơm gà nướng",
    calories: 450,
    time: "15 phút",
    rating: 4.9,
    image: "🍗"
  }
];

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="p-3 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Tìm kiếm món ăn, thành phần..."
          className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-eatfit-green/50"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Popular Searches */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">🔥 Tìm kiếm phổ biến</h3>
        <div className="flex flex-wrap gap-2">
          {popularSearches.map((search, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs cursor-pointer hover:bg-eatfit-green/10 hover:text-eatfit-green transition-colors"
            >
              {search}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Recipes */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">📋 Công thức gần đây</h3>
        <div className="space-y-2">
          {recentRecipes.map((recipe) => (
            <Card key={recipe.id} className="card-hover">
              <CardContent className="p-3">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{recipe.image}</div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{recipe.name}</h4>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {recipe.time}
                      </span>
                      <span>{recipe.calories} cal</span>
                      <span className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                        {recipe.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
