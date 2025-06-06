
import { Search, Filter, Clock, Star, X } from "lucide-react";
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

const searchResults = [
  {
    id: 4,
    name: "Bơ nghiền bánh mì",
    calories: 290,
    time: "3 phút",
    rating: 4.7,
    image: "🥑"
  },
  {
    id: 5,
    name: "Soup rau củ",
    calories: 150,
    time: "25 phút",
    rating: 4.5,
    image: "🍲"
  }
];

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (searchText.trim()) {
      setHasSearched(true);
      console.log('Searching for:', searchText);
    }
  };

  const handlePopularSearch = (term: string) => {
    setSearchText(term);
    setHasSearched(true);
    console.log('Popular search selected:', term);
  };

  const clearSearch = () => {
    setSearchText("");
    setHasSearched(false);
    console.log('Search cleared');
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    console.log('Filters toggled:', !showFilters);
  };

  const viewRecipe = (recipe: any) => {
    console.log('Viewing recipe:', recipe);
    alert(`Công thức: ${recipe.name}\n\nCalo: ${recipe.calories}\nThời gian: ${recipe.time}\nĐánh giá: ${recipe.rating}⭐\n\nChi tiết công thức sẽ được hiển thị tại đây...`);
  };

  return (
    <div className="p-3 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Tìm kiếm món ăn, thành phần..."
          className="w-full pl-10 pr-20 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-eatfit-green/50"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
          {searchText && (
            <Button 
              size="sm" 
              variant="ghost" 
              className="h-8 w-8 p-0"
              onClick={clearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          <Button size="sm" className="h-8 w-8 p-0" onClick={toggleFilters}>
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-3">
            <h4 className="text-sm font-medium mb-2">🔍 Bộ lọc tìm kiếm</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Button size="sm" variant="outline">Theo calo</Button>
              <Button size="sm" variant="outline">Thời gian nấu</Button>
              <Button size="sm" variant="outline">Độ khó</Button>
              <Button size="sm" variant="outline">Nguyên liệu có sẵn</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search Results */}
      {hasSearched ? (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-gray-800">
              🔍 Kết quả tìm kiếm "{searchText}"
            </h3>
            <span className="text-xs text-gray-500">{searchResults.length} kết quả</span>
          </div>
          <div className="space-y-2">
            {searchResults.map((recipe) => (
              <Card key={recipe.id} className="card-hover" onClick={() => viewRecipe(recipe)}>
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
      ) : (
        <>
          {/* Popular Searches */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">🔥 Tìm kiếm phổ biến</h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs cursor-pointer hover:bg-eatfit-green/10 hover:text-eatfit-green transition-colors"
                  onClick={() => handlePopularSearch(search)}
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
                <Card key={recipe.id} className="card-hover" onClick={() => viewRecipe(recipe)}>
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
        </>
      )}
    </div>
  );
};

export default SearchPage;
