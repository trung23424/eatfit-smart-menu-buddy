
import { Calendar, Plus, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const todayMeals = [
  {
    id: 1,
    time: "07:00",
    meal: "Bữa sáng",
    dish: "Yến mạch chuối",
    calories: 320,
    status: "completed"
  },
  {
    id: 2,
    time: "12:30", 
    meal: "Bữa trưa",
    dish: "Salad ức gà nướng",
    calories: 450,
    status: "upcoming"
  },
  {
    id: 3,
    time: "18:00",
    meal: "Bữa tối", 
    dish: "Cá hồi nướng + rau",
    calories: 380,
    status: "planned"
  }
];

const weekDays = [
  { day: "CN", date: "26", isToday: false },
  { day: "T2", date: "27", isToday: false },
  { day: "T3", date: "28", isToday: true },
  { day: "T4", date: "29", isToday: false },
  { day: "T5", date: "30", isToday: false },
  { day: "T6", date: "31", isToday: false },
  { day: "T7", date: "01", isToday: false }
];

const CalendarPage = () => {
  return (
    <div className="p-3 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Lịch trình ăn uống</h2>
          <p className="text-sm text-gray-600">Tháng 5, 2024</p>
        </div>
        <Button size="sm" className="bg-eatfit-green">
          <Plus className="h-4 w-4 mr-1" />
          Thêm
        </Button>
      </div>

      {/* Week Calendar */}
      <div className="flex justify-between space-x-1">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-2 rounded-lg ${
              day.isToday 
                ? 'bg-eatfit-green text-white' 
                : 'bg-gray-50 text-gray-600'
            }`}
          >
            <span className="text-xs font-medium">{day.day}</span>
            <span className="text-sm font-bold mt-1">{day.date}</span>
          </div>
        ))}
      </div>

      {/* Today's Progress */}
      <Card className="gradient-bg text-white">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base font-semibold">Tiến độ hôm nay</h3>
            <Calendar className="h-5 w-5" />
          </div>
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-white/80">Calo tiêu thụ</p>
              <p className="font-bold">1,150 / 1,800</p>
            </div>
            <div>
              <p className="text-white/80">Bữa ăn hoàn thành</p>
              <p className="font-bold">1 / 3</p>
            </div>
          </div>
          <div className="mt-3 bg-white/20 rounded-full h-2">
            <div className="bg-white rounded-full h-2 w-2/3"></div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Meals */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">🍽️ Thực đơn hôm nay</h3>
        <div className="space-y-2">
          {todayMeals.map((meal) => (
            <Card key={meal.id} className="card-hover">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      meal.status === 'completed' 
                        ? 'bg-green-100' 
                        : meal.status === 'upcoming'
                        ? 'bg-orange-100'
                        : 'bg-gray-100'
                    }`}>
                      {meal.status === 'completed' ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Clock className="h-4 w-4 text-gray-600" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-medium text-gray-500">{meal.time}</span>
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{meal.meal}</span>
                      </div>
                      <h4 className="text-sm font-medium mt-1">{meal.dish}</h4>
                      <p className="text-xs text-gray-500">{meal.calories} calo</p>
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

export default CalendarPage;
