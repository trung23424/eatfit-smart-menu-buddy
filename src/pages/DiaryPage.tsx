
import { useState } from "react";
import { Plus, Clock, Camera, Save, Calendar, Coffee, Utensils, Sunset } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const todayEntries = [
  {
    id: 1,
    time: "07:30",
    type: "meal",
    meal: "breakfast",
    title: "Bữa sáng",
    content: "Bánh mì trứng + cafe sữa",
    calories: 350,
    icon: Coffee,
    color: "text-orange-500"
  },
  {
    id: 2,
    time: "10:00",
    type: "activity",
    title: "Tập thể dục",
    content: "Chạy bộ 30 phút trong công viên",
    calories: -200,
    icon: Clock,
    color: "text-green-500"
  },
  {
    id: 3,
    time: "12:30",
    type: "meal",
    meal: "lunch",
    title: "Bữa trưa",
    content: "Cơm gà + rau củ luộc",
    calories: 450,
    icon: Utensils,
    color: "text-blue-500"
  }
];

const mealTypes = [
  { id: "breakfast", label: "Bữa sáng", icon: Coffee, color: "bg-orange-100 text-orange-600" },
  { id: "lunch", label: "Bữa trưa", icon: Utensils, color: "bg-blue-100 text-blue-600" },
  { id: "dinner", label: "Bữa tối", icon: Sunset, color: "bg-purple-100 text-purple-600" },
  { id: "snack", label: "Ăn vặt", icon: Plus, color: "bg-green-100 text-green-600" }
];

const DiaryPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEntry, setNewEntry] = useState({
    type: 'meal',
    meal: 'breakfast',
    title: '',
    content: '',
    calories: '',
    time: new Date().toTimeString().slice(0, 5)
  });

  const totalCalories = todayEntries.reduce((sum, entry) => sum + entry.calories, 0);

  const handleAddEntry = () => {
    console.log('Adding new entry:', newEntry);
    setShowAddForm(false);
    setNewEntry({
      type: 'meal',
      meal: 'breakfast',
      title: '',
      content: '',
      calories: '',
      time: new Date().toTimeString().slice(0, 5)
    });
  };

  return (
    <div className="p-3 space-y-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-800">🧾 Nhật ký ăn uống</h1>
          <p className="text-sm text-gray-500">Ghi chép hàng ngày của bạn</p>
        </div>
        <Button 
          onClick={() => setShowAddForm(true)}
          size="sm" 
          className="bg-eatfit-green"
        >
          <Plus className="h-4 w-4 mr-1" />
          Thêm
        </Button>
      </div>

      {/* Date Selector */}
      <Card>
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <Input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="text-sm border-0 p-0 h-auto"
            />
          </div>
        </CardContent>
      </Card>

      {/* Daily Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-lg font-bold text-green-600">{totalCalories}</p>
              <p className="text-xs text-gray-600">Calories tổng</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-blue-600">{todayEntries.length}</p>
              <p className="text-xs text-gray-600">Hoạt động đã ghi</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add New Entry Form */}
      {showAddForm && (
        <Card className="border-2 border-eatfit-green">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              ➕ Thêm hoạt động mới
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAddForm(false)}
              >
                ✕
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 space-y-3">
            {/* Type Selection */}
            <div className="flex gap-2">
              <Button 
                variant={newEntry.type === 'meal' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setNewEntry({...newEntry, type: 'meal'})}
              >
                🍽️ Bữa ăn
              </Button>
              <Button 
                variant={newEntry.type === 'activity' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setNewEntry({...newEntry, type: 'activity'})}
              >
                🏃 Hoạt động
              </Button>
            </div>

            {/* Meal Type Selection (if meal) */}
            {newEntry.type === 'meal' && (
              <div className="grid grid-cols-2 gap-2">
                {mealTypes.map((mealType) => {
                  const Icon = mealType.icon;
                  return (
                    <Button
                      key={mealType.id}
                      variant={newEntry.meal === mealType.id ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setNewEntry({...newEntry, meal: mealType.id})}
                      className="justify-start"
                    >
                      <Icon className="h-3 w-3 mr-1" />
                      {mealType.label}
                    </Button>
                  );
                })}
              </div>
            )}

            {/* Time */}
            <div>
              <label className="text-xs font-medium text-gray-700">Thời gian</label>
              <Input 
                type="time"
                value={newEntry.time}
                onChange={(e) => setNewEntry({...newEntry, time: e.target.value})}
                className="mt-1"
              />
            </div>

            {/* Title */}
            <div>
              <label className="text-xs font-medium text-gray-700">Tiêu đề</label>
              <Input 
                placeholder={newEntry.type === 'meal' ? 'VD: Bánh mì trứng' : 'VD: Chạy bộ'}
                value={newEntry.title}
                onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                className="mt-1"
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-xs font-medium text-gray-700">Mô tả chi tiết</label>
              <Textarea 
                placeholder={newEntry.type === 'meal' ? 'Mô tả món ăn, cảm nhận...' : 'Thời lượng, cường độ, cảm giác...'}
                value={newEntry.content}
                onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                className="mt-1 min-h-[60px]"
              />
            </div>

            {/* Calories */}
            <div>
              <label className="text-xs font-medium text-gray-700">
                {newEntry.type === 'meal' ? 'Calories nạp vào' : 'Calories đốt cháy'}
              </label>
              <Input 
                type="number"
                placeholder="VD: 350"
                value={newEntry.calories}
                onChange={(e) => setNewEntry({...newEntry, calories: e.target.value})}
                className="mt-1"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button onClick={handleAddEntry} className="flex-1" size="sm">
                <Save className="h-3 w-3 mr-1" />
                Lưu lại
              </Button>
              <Button variant="outline" size="sm">
                <Camera className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Timeline Entries */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700">📅 Hoạt động hôm nay</h3>
        {todayEntries.map((entry) => {
          const Icon = entry.icon;
          return (
            <Card key={entry.id} className="card-hover">
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <Icon className={`h-4 w-4 ${entry.color}`} />
                    <span className="text-xs text-gray-500 mt-1">{entry.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium">{entry.title}</h4>
                      <Badge variant={entry.calories > 0 ? "default" : "secondary"} className="text-xs">
                        {entry.calories > 0 ? '+' : ''}{entry.calories} cal
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{entry.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {todayEntries.length === 0 && (
        <Card className="text-center py-8">
          <CardContent>
            <div className="text-4xl mb-2">📝</div>
            <h3 className="font-medium text-gray-800 mb-1">Chưa có hoạt động nào</h3>
            <p className="text-sm text-gray-500 mb-3">Bắt đầu ghi chép ngay hôm nay!</p>
            <Button onClick={() => setShowAddForm(true)} size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Thêm hoạt động đầu tiên
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DiaryPage;
